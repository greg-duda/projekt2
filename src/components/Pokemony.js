import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import Card from './Card';
import styled from 'styled-components'
import RightArrow from '../images/RightArrow.png'
import LeftArrow from '../images/LeftArrow.png' 

const LoadingH = styled.h3 `
height: 100px;
line-height: 100px;
text-align: center;
background-color: hotpink;
margin: 0;
vertical-align: middle;
font-size: 20px;
`
const NextBtn = styled.button `
height: 100px;
width: 150px;
background-color: #99D9EA;
font-size: 15px;
transition: 0.5s;
cursor: pointer;
border: none;
background-image: url(${RightArrow});
color:transparent;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
border-radius: 50px;
&:hover {
    transform: scale(1.1);
  background-color: hotpink;
}
`
const PrevBtn = styled.button `
height: 100px;
width: 150px;
background-color: #99D9EA;
font-size: 15px;
transition: 0.5s;
cursor: pointer;
border: none;
background-image: url(${LeftArrow});
color:transparent;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
border-radius: 50px;
&:hover {
    transform: scale(1.1);
  background-color: hotpink;
}

`



    const Pokemony= ({setPokemons2}) => {
        const [pokemons, setAllPokemons] = useState([])
        const [loading, setLoading] = useState(true)
        const [searchInput, setSearchInput] = useState('')
        const [filtered, setFiltered] = useState([])
        const [offset, currentOffset] = useState(0)
        const [limit, setLimit] = useState(15)
       
        const history = useHistory()


        const handleClick = () => {
            history.push(`/${pokemons.name}`)
          }

        const nextPage = () => {
            currentOffset(offset + 15)
            if(offset === 135) {
                setLimit(1)
            }
        }
        const previousPage = () => {
            currentOffset(offset - 15)
            if(limit === 1 && offset === 150) {
                setLimit(15)
            }
        }
        useEffect(() => {
            setLoading(true)
            axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
            .then(res => {
                setLoading(false)
                setAllPokemons(res.data)
                
            })
        }, [offset])
const searchPoke = (searchValue) => {
setSearchInput(searchValue)
if(searchInput) {
    const filteredPoke = pokemons.filter((poke) => (
        Object.values(poke.results.name).join("").toLowerCase().includes(searchValue.toLowerCase())
    ))
    setFiltered(filteredPoke)
} else {
    setFiltered(pokemons)
}

}
        
        if(loading) {
            return (
                <LoadingH>Loading...</LoadingH>
            )
        }
        console.log(pokemons)
console.log(filtered)
            return(
                <>
                <div className='searchBar'><input placeholder='Search your pokemon...' type='text' onChange={(e) => searchPoke(e.target.value)} /></div>
                <div className='buttonBar'><PrevBtn disabled ={offset === 0 ? true : false } onClick={previousPage}></PrevBtn>
                <NextBtn disabled ={offset === 150 ? true : false }onClick={nextPage}></NextBtn></div>
                
           <div className='pokemon-container'>
               {searchInput.length > 1 ? filtered?.results?.map(pokemon => <Card onClick={handleClick} name={pokemon.name} key={pokemon.name} url={pokemon.url} />) : pokemons?.results?.map(pokemon => <Card onClick={handleClick} name={pokemon.name} key={pokemon.name} url={pokemon.url} />)}
               
           </div>
           </>
            )
        
            }
export default Pokemony
