"use client";

import { Provider, useSelector } from "react-redux";
import { store } from "./store";

function ThemeWrapper({ children }) {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      {children}
    </div>
  );
}

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </Provider>
  );
}