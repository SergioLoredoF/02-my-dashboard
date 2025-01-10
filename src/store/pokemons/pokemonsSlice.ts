import { ISimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';

/*
    {
        favorites: {
            '1': { id: '1', name: 'bulbasaur' }, 
            '2': { id: '2', name: 'wea' }, 
        }
    }
*/

interface PokemonsState {
    favorites: {[key: string]: ISimplePokemon}
};

const initialState: PokemonsState = {
    favorites: {}
};

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setFavoritePokemoons(state, action: PayloadAction<{[key: string]: ISimplePokemon}>) {
            state.favorites = action.payload;
        },
        toggleFavorite(state, action: PayloadAction<ISimplePokemon>) {
            if ( !!state.favorites[action.payload.id] ) {
                delete state.favorites[action.payload.id];
            } else {
                state.favorites[action.payload.id] = action.payload;
            }

        }
    },
});

export const { toggleFavorite, setFavoritePokemoons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;