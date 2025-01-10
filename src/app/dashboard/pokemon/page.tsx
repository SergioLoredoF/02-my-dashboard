import { IPokemonsResponse, ISimplePokemon, PokemonGrid } from "@/pokemons";

const getPokemons = async (limit = 50, offset = 0): Promise<ISimplePokemon[]> => {
    const data: IPokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, { cache: 'force-cache' })
        .then(async (res) => await res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))

    // throw('Ocurrio algo terrible hermano, ni modo');

    return pokemons;
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons();

    return (
        <div className=" flex flex-col ">

            <span className="text-5xl my-2">Listado de pokémons <small>estático</small></span>

            <PokemonGrid pokemons={ pokemons } />
            
        </div>
    )
}