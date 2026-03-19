'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  if (resolvedTheme === undefined) {
    return (
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-surface shadow-soft hover:bg-surface-soft"
        aria-label="切换主题"
      >
        <span className="size-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-surface shadow-soft hover:bg-surface-soft"
      aria-label={isDark ? '切换到亮色模式' : '切换到暗色模式'}
    >
      {isDark ? (
        <Sun className="size-4 text-fg-muted" />
      ) : (
        <Moon className="size-4 text-fg-muted" />
      )}
    </button>
  );
}
