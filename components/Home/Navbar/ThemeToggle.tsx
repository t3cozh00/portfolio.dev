"use client";
import { LuSun, LuMoon } from "react-icons/lu";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div>
      <div className="bg-zinc-100 rounded-xl p-2 ">
        <button
          onClick={() => setIsDarkMode(false)}
          className="bg-transparent p-2 hover:bg-zinc-200 rounded-lg text-black"
        >
          <LuSun />
        </button>
        <button
          onClick={() => setIsDarkMode(true)}
          className="bg-transparent p-2 hover:bg-zinc-200 rounded-lg text-black"
        >
          <LuMoon />
        </button>
      </div>
    </div>
  );
};
