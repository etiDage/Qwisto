import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    values: [
        {
            id: 0,
            title: "Muffins aux citrons",
            description: "Temps de préparation: 30 min.",
        },
        {
            id: 1,
            title: "Muffins aux carotte",
            description: "Temps de préparation: 30 min.",
        },
        {
            id: 2,
            title: "Hamburger",
            description: "Temps de préparation: 15 min.",
        }
    ]
}

const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        addRecipe(state, action) {
            state.values.push(action.payload);
        },
    }
})

export const {addRecipe} = recipesSlice.actions
export default recipesSlice.reducer