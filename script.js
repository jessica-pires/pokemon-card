const urlApi = 'https://pokeapi.co/api/v2/pokemon';
const pokemonElement = document.querySelector('.pokemon');
console.log(pokemonElement)


const randomId = () => Math.floor(Math.random() * 905);

const getAbilities = (abilities) => abilities.map(item => item.ability.name);

const createAbilities = (abilities) => abilities.reduce((acc, item) => acc += `<li>${item} </li>` , '')
const createPokemon = (pokemon) => {
    pokemonElement.innerHTML = `
        <div class="pokemon__wrapperImage">
            <img src="${pokemon.image}" alt="${pokemon.name}" class="pokemon__image">
        </div>
        <div class="pokemon__info">
            <h2 class="pokemon__name">${pokemon.name}</h2>
            <ul class="pokemon__abilities">
                ${createAbilities(pokemon.abilities)}
            </ul>
        </div>
    `

}

const getPokemon = ()=>
    fetch(`${urlApi}/${randomId()}`)
        .then(response => response.json())
        .then(pokemon  => {
            const pokemonSelected = {
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                abilities: getAbilities(pokemon.abilities)
            }
            createPokemon(pokemonSelected);
        })

getPokemon();