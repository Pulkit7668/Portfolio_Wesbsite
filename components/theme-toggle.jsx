'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Toggle theme"
    >
      {/* Sun = Light mode me dikhega */}
      <Sun className="w-5 h-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
      
      {/* Moon = Dark mode me dikhega */}
      <Moon className="absolute w-5 h-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
    </button>
  )
}