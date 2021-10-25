import React from 'react'
import { Link } from 'react-router-dom'
import Logos from '../images/Logos.png'
import Stadium from '../images/Stadium.png'
import Heart from '../images/Heart.png'
import Pokeball from '../images/pokeball.png'
import styled from 'styled-components'

const NavLink = styled(Link)`
line-height: 80px;
vertical-align: middle;
display: inline-block;
cursor: pointer;
height: 80px;
width: 400px ;
text-align: center;
border: lightgrey 1px solid;
border-radius: 10px;
text-decoration: none;
font-size: 20px;
box-shadow: whitesmoke 1px 1px 1px 1px;
background-color: hotpink;
color: black;
transition: 0.5s;
&:hover {
    box-shadow: 0 4px 8px 10px rgba(0,0,0,0.2);
    text-decoration: none;
    background-color: whitesmoke;
    color: rgb(61, 61, 61);
    border-radius: 10px;
}
`

const Navigation = () => {


    return(
        <div className='nav'>
            <div className='logo'>
                <img alt='logo' src={Logos}></img>
            </div>
            <div className='flexpart'>
                <div className='itemone'></div>
                <div className='part'>
                    <NavLink to='/SingleCard'><img className='icon' src={Stadium}></img>Arena Pokemon</NavLink>
                    <NavLink to='/Ulubione'><img className='icon' src={Heart}></img>Ulubione</NavLink>
                    <NavLink to='/Home'><img className='icon' src={Pokeball}></img>Lista Pokemon</NavLink>
                </div>
                <div className='itemtwo'></div>
            </div>
            

        </div>
    )
}
export default Navigation