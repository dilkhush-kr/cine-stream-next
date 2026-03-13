"use client";

import Link from "next/link";

export default function Navbar(){

  return(

    <nav className="navbar">

      <h1>CineStream 🎬</h1>

      <div>

        <Link href="/">Home</Link>

        <Link href="/favorites">Favorites</Link>

      </div>

    </nav>

  )

}