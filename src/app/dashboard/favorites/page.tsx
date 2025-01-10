import { PokemonGridFav } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Favoritos',
    description: 'Listado de pokémons favoritos'
}


export default function PokemonsPage() {
    
    //PokemonCard
    return (
        <div className=" flex flex-col ">

            <span className="text-5xl my-2">Pokémons favoritos <small>global state</small></span>

            <PokemonGridFav />
            
        </div>
    )
}