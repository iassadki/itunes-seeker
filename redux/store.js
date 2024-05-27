import { configureStore } from '@reduxjs/toolkit';
import ratingReducer from "./rating/ratingSlice";
import likedSongsReducer from "./like/likedSongsSlice";

export default configureStore({
    reducer: {
        rating: ratingReducer, // Ajouter le reducer rating
        likedSongs: likedSongsReducer, // Ajouter le reducer likedSongs
    },
});

//* Le reducer sert a gérer les actions et les états de l'application. 
//* Il est utilisé pour mettre à jour l'état global de l'application en fonction des actions déclenchées par l'utilisateur. 
//* Dans cet exemple, nous avons ajouté un reducer pour gérer les chansons aimées. 
//* Le reducer likedSongsReducer est importé depuis un fichier séparé et ajouté au store en tant que propriété likedSongs. 
//* Cela permet de gérer les actions liées aux chansons aimées et de mettre à jour l'état global de l'application en conséquence.
