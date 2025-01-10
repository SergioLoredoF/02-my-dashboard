'use client';
import { useAppSelector } from "@/store";
import { PokemonCard } from "./PokemonCard";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const PokemonGridFav = () => {
    const pokemonsObj = useAppSelector( state => state.pokemons.favorites );
    const pokemonsFav = Object.values( pokemonsObj );

    const [pokemons, setPokemons] = useState(pokemonsFav);

    useEffect(()=>{
        setPokemons(pokemonsFav)
    },[pokemonsObj])

    return(
        <div className=" flex flex-wrap gap-10 items-center justify-center">
                {
                    pokemons.length
                        ?   pokemons.map((pokemon) =>
                                <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
                            )
                        :   < NoFavorites />
                }
                
        </div>
    )
}

export const NoFavorites  = () => {
    return(
        <div className="flex flex-col h-[25vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No hay favoritos</span>
        </div>
    )
}