'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Laptop } from 'lucide-react';

export function ThemeToggleButton() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const themes = ['light', 'dark'];
  const currentThemeIndex = themes.indexOf(theme || 'system');
  const nextTheme = themes[(currentThemeIndex + 1) % themes.length];

  const toggleTheme = () => {
    setTheme(nextTheme);
  };

  if (!mounted) {
    return null;
  }

  let Icon;
  if (theme === 'light') {
    Icon = Sun;
  } else {
    Icon = Moon;
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-8 h-8 flex items-center justify-center transition-all text-zinc-900/60 dark:text-zinc-100/60 hover:text-zinc-900/100 dark:hover:text-zinc-100/100"
      aria-label="Toggle theme"
    >
      <Icon className="transition-all h-5 w-5" />
    </button>
  );
} 