import favoritesReducer, {
  addFavorite,
  removeFavorite,
} from "./favoritesSlice";


//  Test 1: initial state check
test("should return initial state", () => {
  const state = favoritesReducer(undefined, { type: "unknown" });

  expect(state).toEqual({ items: [] });
});


//  Test 2: add favorite movie
test("should add movie to favorites", () => {
  const initialState = { items: [] };

  const movie = { id: 1, title: "Batman" };

  const newState = favoritesReducer(
    initialState,
    addFavorite(movie)
  );

  expect(newState.items.length).toBe(1);
  expect(newState.items[0]).toEqual(movie);
});


//  Test 3: remove favorite movie
test("should remove movie from favorites", () => {
  const initialState = {
    items: [{ id: 1, title: "Batman" }],
  };

  const newState = favoritesReducer(
    initialState,
    removeFavorite(1)
  );

  expect(newState.items.length).toBe(0);
});