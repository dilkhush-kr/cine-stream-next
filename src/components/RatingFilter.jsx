"use client";

import { useDispatch } from "react-redux";
import { setRating } from "../app/features/filterSlice";

export default function RatingFilter() {

  const dispatch = useDispatch();

  return (

    <select
      onChange={(e) => dispatch(setRating(Number(e.target.value)))}
      style={{ margin: "10px", padding: "5px" }}
    >
      <option value="0">All Ratings</option>
      <option value="5">5+</option>
      <option value="7">7+</option>
      <option value="8">8+</option>
    </select>

  );
}