"use client";
import { cn } from "@/components/lib/utils";
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
      <div className="relative z-50 flex items-center -space-x-1 rounded-lg ml-2">
        <button
          onClick={() => setIsDarkMode((prev) => !prev)}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          className={cn(
            "relative z-50 inline-flex h-9 w-9 items-center justify-center rounded-lg",
            "text-zinc-900 dark:text-zinc-100",
            "hover:bg-zinc-200 dark:hover:bg-zinc-700",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
            "ml-2"
          )}
        >
          {isDarkMode ? <LuSun /> : <LuMoon />}
        </button>
      </div>
    </div>
  );
};
