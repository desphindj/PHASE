import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    textAlign: "center",
    borderRadius: "5px",
  };

  return (
    <div style={styles}>
      <h2>Theme Switcher</h2>
      <p>Current Theme: {theme.toUpperCase()}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
