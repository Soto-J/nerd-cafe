export const PokeApi = (pokemonName) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => console.log(data));
};
