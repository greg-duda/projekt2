import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import back from '../images/back.jpg'
const CardStyle = styled.div `
background-image: url(${back});
background-position: center;
border-radius: 5px;
justify-content: center;
height: 460px;
width: 400px;
background-color: rgb(252, 101, 101);
display: flex;
flex-wrap: wrap;
border: rgb(61, 61, 61) solid 1px;
box-shadow: #99D9EA 0px 0px 56px 14px;
transition: 0.5s;
opacity: 90%;
&:hover {
    transform:scale(102%);
  opacity: 100%;
}
`

 export const CardHeader = styled.h2 `
font-size: 20px;
background-color: #99D9EA;
width: 100%;
text-align: center;
color: rgb(61, 61, 61);
`
const CardInfo = styled.h4 `
`

const Card = ({ url, name }) => {
    const [pokemonDetails, setPokemonDetails] = useState([])
    useEffect(() => {
        axios.get(url).then(res => {
            setPokemonDetails(res.data)
        })
    }, [])
    
    return(
        <div className='poke'>
        <CardStyle>
        <CardHeader>{pokemonDetails?.name}</CardHeader>
            <div className='pokemon-img'><img className='pokeImg' src={pokemonDetails?.sprites?.other?.dream_world?.front_default}></img></div>
            <div className='pokemon-details'>
            <h3>Ability: {pokemonDetails?.abilities?.[0]?.ability?.name}</h3>
            <h3>Base Experience: {pokemonDetails?.base_experience}</h3>
            <h4>Height: {pokemonDetails?.height}</h4>
            <h4>Weight: {pokemonDetails?.height}</h4>
            </div>
            
        </CardStyle>
        </div>
    )
}
export default Card