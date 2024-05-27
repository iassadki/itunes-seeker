import { createSlice } from "@reduxjs/toolkit";

const ratingSlice = createSlice({
    name: 'rating',
    initialState: {}, // Initialisez le state avec un objet vide
    reducers: {
        // Ajoutez un reducer pour mettre à jour le rating d'une musique
        setRating: (state, action) => {
            const { musicId, rating } = action.payload; // Extrayez musicId et rating de l'action payload
            return {
                ...state, // Copiez le state actuel
                [musicId]: rating // Mettez à jour le rating de la musique spécifique, identifiée par musicId
            };
        }
    }
});

export const { setRating } = ratingSlice.actions;
export const ratingSelector = (state, musicId) => state.rating[musicId]; // Utilisez le musicId pour récupérer le rating spécifique à chaque musique
export default ratingSlice.reducer;
