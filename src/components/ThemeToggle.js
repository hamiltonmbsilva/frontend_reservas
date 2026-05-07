"use client";

import { useTheme } from "../contexts/ThemeContext";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.button} onClick={toggleTheme} type="button">
      {theme === "light" ? "🌙" : "☀️"}
      <span>{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
}