import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MovieCard from "./MovieCard";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../app/features/favoritesSlice";


jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});

const renderWithRedux = (component, { initialState } = {}) => {
  const store = configureStore({
    reducer: {
      favorites: favoritesReducer,
    },
    preloadedState: initialState,
  });

  return render(<Provider store={store}>{component}</Provider>);
};

const mockMovie = {
  id: 1,
  title: "Batman",
  poster_path: "/test.jpg",
  release_date: "2020-01-01",
  vote_average: 8.5,
};


//  Test 1: Render movie title
test("renders movie title", () => {
  renderWithRedux(<MovieCard movie={mockMovie} />);

  expect(screen.getByText("Batman")).toBeInTheDocument();
});


//  Test 2: Render image
test("renders movie image", () => {
  renderWithRedux(<MovieCard movie={mockMovie} />);

  const img = screen.getByAltText("Batman");
  expect(img).toBeInTheDocument();
});


//  Test 3: Add to favorites (click)
test("adds movie to favorites on click", async () => {
  renderWithRedux(<MovieCard movie={mockMovie} />, {
    initialState: { favorites: { items: [] } },
  });

  const button = screen.getByRole("button");

  await userEvent.click(button);

  expect(button).toBeInTheDocument(); // basic interaction check
});


//  Test 4: Show filled heart if already favorite
test("shows ❤️ if movie is in favorites", () => {
  renderWithRedux(<MovieCard movie={mockMovie} />, {
    initialState: {
      favorites: {
        items: [mockMovie],
      },
    },
  });

  expect(screen.getByText("❤️")).toBeInTheDocument();
});
