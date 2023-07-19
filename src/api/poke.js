export function getPokemons(offset,limit){
    //chamando a API
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
  }

  export function getPokemonDetail(pokemon) {
    return fetch(pokemon.url)
        .then((response) => response.json())
}

  