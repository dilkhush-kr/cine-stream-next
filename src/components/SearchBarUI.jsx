import React from "react";

export default function SearchBarUI({
  value,
  onChange,
  placeholder = "Search movies...",
}) {
  return (
    <input
      className="search-bar"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}