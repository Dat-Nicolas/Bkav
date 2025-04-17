import { createContext, useContext, useState, ReactNode } from "react";

// 1. Define the context type
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

// 2. Create the context with a default value (can be null initially)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Provider component props
type ThemeProviderProps = {
  children: ReactNode;
};

// 4. ThemeProvider implementation
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 5. Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
