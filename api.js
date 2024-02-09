const url = "https://pokeapi.co/api/v2/pokemon";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Hubo un problema al obtener los datos.');
    }
    return response.json();
  })
  .then(data => {
    const listaPokemons = document.getElementById("ponerApi");
    const pokemons = data.results;

    // Mapear cada Pokémon a un elemento <li> con un enlace
    const listaHTML = pokemons.map(pokemon => `
      <li>
        <a href="https://pokeapi.co/api/v2/pokemon/${pokemon.name}">
          ${pokemon.name}
        </a>
      </li>
    `).join('');

    // Agregar la lista de Pokémon al contenedor
    listaPokemons.innerHTML = listaHTML;
  })
  .catch(error => {
    console.error('Error:', error);
  });
