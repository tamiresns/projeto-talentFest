import React, { useEffect, useState } from 'react';
import { getPokemons } from '../api/poke';

function PokemonComponent() {
  const [pokemonList, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemonData = async () => {
      const data = await getPokemons();
      console.log(data)
      setPokemon(data);
    };

    getPokemonData();
  }, []);

  if (!pokemonList) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Lista de Pokémons:</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>
            <img src={pokemon.sprites.other.dream_world.front_default}/>
            <h2>{pokemon.name}</h2>
            <p>Mais detalhes {pokemon.url}</p>
            {/* Exiba outros dados do Pokémon */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonComponent;
