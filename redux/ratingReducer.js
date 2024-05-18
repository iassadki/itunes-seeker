// // ratingReducer.js
// const initialState = {
//     ratings: {} // L'état initial contient un objet pour stocker les notes par ID de musique
// };

// const ratingReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_RATING':
//             return {
//                 ...state,
//                 ratings: {
//                     ...state.ratings,
//                     [action.musicId]: action.rating // Stocke la note attribuée à la musique spécifiée par son ID
//                 }
//             };
//         default:
//             return state;
//     }
// };

// export default ratingReducer;
