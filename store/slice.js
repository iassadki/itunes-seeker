import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [], // state par défaut
    reducers: {
        // Reducer pour ajouter une tache à la todolist
        addTask: (state, action) => {
            state.push(action.payload);
        },
        // Reducer pour enlever une tache de la todolist
        removeTask: (state, action) => {
            state.splice(action.payload, 1);
        },
    }
});

export const { addTask, removeTask } = tasksSlice.actions;
export const tasksSelector = (state) => state.tasks;
export default tasksSlice.reducer; 