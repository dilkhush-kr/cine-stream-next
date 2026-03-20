
// "use client";

// export default function SearchBar({query,setQuery}){

//   return(

//     <input
//       className="search-bar"
//       type="text"
//       placeholder="Search movies..."
//       value={query}
//       onChange={(e)=>setQuery(e.target.value)}
//     />

//   )
// }

"use client";

import { useDispatch } from "react-redux";
import { setSearch } from "../app/features/filterSlice";

export default function SearchBar() {

  const dispatch = useDispatch();

  return (

    <input
      className="search-bar"
      type="text"
      placeholder="Search movies..."
      onChange={(e) => dispatch(setSearch(e.target.value))}
    />

  );
}