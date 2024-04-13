"use client";

import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@/assets/Icons/icons";

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <div>
      {theme === "dark" ? (
        <Button
          size="icon"
          className="rounded-full w-8 h-8"
          onClick={() => setTheme("light")}
        >
          {SunIcon()}
        </Button>
      ) : (
        <Button
          size="icon"
          className="rounded-full w-8 h-8"
          onClick={() => setTheme("dark")}
        >
          {MoonIcon()}
        </Button>
      )}
    </div>
  );
}
