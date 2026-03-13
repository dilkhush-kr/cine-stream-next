// "use client";

// import { useState } from "react";

// export default function SearchBar({ onSearch }) {

//   const [query,setQuery] = useState("");

//   const handleSearch = (e) => {

//     const value = e.target.value;
//     setQuery(value);

//     onSearch(value);
//   };

//   return(

//     <input
//       className="search-bar"
//       type="text"
//       placeholder="Search movies..."
//       value={query}
//       onChange={handleSearch}
//     />

//   )
// }


"use client";

export default function SearchBar({query,setQuery}){

  return(

    <input
      className="search-bar"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
    />

  )
}