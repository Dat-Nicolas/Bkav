import { useThemeStore } from '../store/themeSlice'

export default function ThemeToggleButton() {
  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return (
    <button
      onClick={toggleTheme}
      className="p-2 mt-4 rounded bg-gray-300 dark:bg-gray-700"
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}
