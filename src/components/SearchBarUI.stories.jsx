import SearchBarUI from "./SearchBarUI";
import { useState } from "react";

export default {
  title: "Components/SearchBar",
  component: SearchBarUI,
};

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <SearchBarUI
      value={value}
      onChange={setValue}
    />
  );
};