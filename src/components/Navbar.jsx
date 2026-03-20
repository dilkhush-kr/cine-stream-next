

"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../app/features/themeSlice";

export default function Navbar() {

  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const favorites = useSelector((state) => state.favorites.items);

  return (

    <nav className="navbar">

      <h1 className="logo">CineStream 🎬</h1>

      <div className="nav-right">

        <Link href="/">Home</Link>

        <Link href="/favorites">
          Favorites ({favorites.length})
        </Link>

        <button className="theme-btn" onClick={() => dispatch(toggleTheme())}>
          {mode === "light" ? "🌙" : "☀️"}
        </button>

      </div>

    </nav>

  );
}