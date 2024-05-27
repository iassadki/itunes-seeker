import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const likedSongsSlice = createSlice({
    name: 'likedSongs',
    initialState,
    reducers: {
        toggleLikeSong: (state, action) => {
            const song = action.payload;
            const existingIndex = state.findIndex(item => item.trackId === song.trackId);
            if (existingIndex !== -1) {
                state.splice(existingIndex, 1);
            } else {
                state.push(song);
            }
        },
    },
});

export const { toggleLikeSong } = likedSongsSlice.actions;

export default likedSongsSlice.reducer;
