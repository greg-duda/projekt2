import React from 'react'
import Pokemony from './Pokemony'


const Home = ({setPokemons2}) => {



    return(
        <div className='home'>
            <Pokemony setPokemons2={setPokemons2} />
        </div>
    )
}
    export default Home