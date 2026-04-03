
// "use client";

// import { useDispatch } from "react-redux";
// import { setSearch } from "../app/features/filterSlice";

// export default function SearchBar() {

//   const dispatch = useDispatch();

//   return (

//     <input
//       className="search-bar"
//       type="text"
//       placeholder="Search movies..."
//       onChange={(e) => dispatch(setSearch(e.target.value))}
//     />

//   );
// }



"use client";

import { useDispatch } from "react-redux";
import { setSearch } from "../app/features/filterSlice";
import SearchBarUI from "./SearchBarUI";

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <SearchBarUI
      value=""
      onChange={(val) => dispatch(setSearch(val))}
    />
  );
}