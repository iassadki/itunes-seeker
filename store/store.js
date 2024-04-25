import { configureStore } from "@reduxjs/toolkit";
import musicReducer from '../components/HomeScreen'

export default configureStore({
    reducer: {
        music: musicReducer,
    }
})