import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import MovieGrid from "./MovieGrid";

//  Mock child components
jest.mock("./MovieCard", () => ({ movie }) => <div>{movie.title}</div>);
jest.mock("./SearchBar", () => () => <div>SearchBar</div>);
jest.mock("./RatingFilter", () => () => <div>RatingFilter</div>);

//  Fake filter reducer
const filterReducer = (state = { search: "", rating: 0 }) => state;

// Helper function
const renderWithRedux = (component, { initialState } = {}) => {
  const store = configureStore({
    reducer: {
      filter: filterReducer,
    },
    preloadedState: initialState,
  });

  return render(<Provider store={store}>{component}</Provider>);
};

//  Mock data
const mockMovies = [
  { id: 1, title: "Batman", vote_average: 8 },
  { id: 2, title: "Superman", vote_average: 6 },
];


//  Test 1: render all movies
test("renders movies from props", () => {
  renderWithRedux(<MovieGrid movies={mockMovies} />);

  expect(screen.getByText("Batman")).toBeInTheDocument();
  expect(screen.getByText("Superman")).toBeInTheDocument();
});


//  Test 2: filter by search
test("filters movies by search", () => {
  renderWithRedux(<MovieGrid movies={mockMovies} />, {
    initialState: {
      filter: { search: "bat", rating: 0 },
    },
  });

  expect(screen.getByText("Batman")).toBeInTheDocument();
  expect(screen.queryByText("Superman")).toBeNull();
});


//  Test 3: filter by rating
test("filters movies by rating", () => {
  renderWithRedux(<MovieGrid movies={mockMovies} />, {
    initialState: {
      filter: { search: "", rating: 7 },
    },
  });

  expect(screen.getByText("Batman")).toBeInTheDocument();
  expect(screen.queryByText("Superman")).toBeNull();
});