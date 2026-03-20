import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    rating: 0,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
  },
});

export const { setSearch, setRating } = filterSlice.actions;
export default filterSlice.reducer;