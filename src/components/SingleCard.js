import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const BackLink = styled(Link) `
display: inline-block;
width: 800px;
margin: 0 auto;
height: 40px;
background-color: whitesmoke;
border: 1px solid red;
color: red;
font-size: 22px;
font-weight: 500;
cursor: pointer;
transition: 0.2s;
text-align: center;
text-decoration: none;
    &:hover {
      background-color: red;
      color:whitesmoke;
     }
`

const SingleCard = ( { url }) => {
    const  [result, setResult] = useState([])
    useEffect(() => {
        axios.get(`${url}`)
        .then(res => {
            setResult(res.data)
            console.log(res.data)
        })
    }, [])
    return (
        <div className='Detail-container'>
            <h1>Pokedex</h1>
            <div className='singleDetailContainer'>
                <div id='image-container'><img id='image'src={result?.sprites?.other?.dream_world?.front_default}></img></div>
                <h6>{result?.name}
                <div id='flex-details'>
                    <div id='itemOne'><span>{result?.height}</span>
                     <h5>Height</h5>
                    <span>{result?.weight}</span>
                    <h5>Weight</h5></div>
                    <div id='itemTwo'>
                        <span>{result?.base_experience}</span>
                        <h5> Base experience</h5> 
                       <span>{result?.abilities?.[0]?.ability?.name} </span>
                        <h5>Ability</h5>
                    </div>
                    
                    </div></h6>
                
            </div>
            
            <BackLink to='/Home' id='back'>Strona główna</BackLink>
            
           
        </div>
    )
}

export default SingleCard