import { useEffect, useRef, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '../lib/cn'

export const THEME_STORAGE_KEY = 'theme'

function readCurrentTheme() {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function syncChrome(theme) {
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff')
}

export function ThemeToggle({ className }) {
  const [theme, setTheme] = useState(readCurrentTheme)
  const timer = useRef(null)

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.style.colorScheme = theme
    syncChrome(theme)
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      root.dataset.theme = theme
    }

    root.classList.add('theme-anim')
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => root.classList.remove('theme-anim'), 320)

    return () => window.clearTimeout(timer.current)
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface-3 text-ink ring-1 ring-line transition duration-300 hover:bg-surface-4 hover:ring-line-strong active:scale-95',
        className,
      )}
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px]" />
      ) : (
        <Moon className="h-[18px] w-[18px]" />
      )}
    </button>
  )
}
