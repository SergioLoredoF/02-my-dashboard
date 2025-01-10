'use client';

import Link from "next/link"
import Image from "next/image";
import { ISimplePokemon } from "../interfaces/simple-pokemon"
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemonsSlice";

interface Props {
    pokemon: ISimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    const { name, id } = pokemon;

    const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id]);
    const dispath = useAppDispatch();


    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b ">
                    <Image
                        alt={pokemon.name}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        width={100}
                        height={100}
                        key={pokemon.id}
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <div className="mt-5">
                        <Link
                            href={`pokemons/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Más información
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div onClick={() => dispath( toggleFavorite( pokemon ) )} className="px-4 py-2 hover:bg-gray-100 flex flex-row items-center justify-center cursor-pointer">
                        <div className="text-red-600">
                            {
                                isFavorite 
                                    ? <IoHeart className="text-red-600" />
                                    : <IoHeartOutline className="text-red-600" />
                            }
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                {
                                    isFavorite 
                                        ? 'Favorito' 
                                        : 'No es favorito'
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}