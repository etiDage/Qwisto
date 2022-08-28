import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/Redux/counterSlice";
import recipesReducer from "../src/Redux/recipesSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        recipes: recipesReducer
    }
})