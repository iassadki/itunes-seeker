import { configureStore } from '@reduxjs/toolkit';
import ratingReducer from "../redux/ratingSlice";

export default configureStore({
    reducer: {
        rating: ratingReducer,
    },
});
