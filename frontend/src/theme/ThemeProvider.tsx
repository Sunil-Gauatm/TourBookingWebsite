// ThemeProvider.tsx
import React, { useEffect } from "react";
import { lightTheme } from "./colors";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(lightTheme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
