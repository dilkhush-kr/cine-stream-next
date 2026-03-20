import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favoritesSlice.js";
import filterReducer from "./features/filterSlice.js";
import themeReducer from "./features/themeSlice.js";
export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    filter: filterReducer,
    theme: themeReducer,
  },
});