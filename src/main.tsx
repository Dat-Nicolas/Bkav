import { ThemeProvider } from "./contexts/ThemeContext";
import "@/assets/styles/main.css";
import { StrictMode, useState, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router";
import { MESSAGES, LOCALES } from "../src/libs/src/message";
import { IntlProvider } from "react-intl";

// Language Context
const LanguageContext = createContext<{
  language: string;
  setLanguage: (lang: string) => void;
}>({
  language: LOCALES.VIETNAM,
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

// Theme Context
const ThemeContext = createContext<{
  theme: string;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const App = () => {
  const [language, setLanguage] = useState(LOCALES.VIETNAM);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const messages = {
    [LOCALES.ENGLISH]: MESSAGES[LOCALES.ENGLISH],
    [LOCALES.VIETNAM]: MESSAGES[LOCALES.VIETNAM],
  };

  return (
    <ThemeProvider>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <IntlProvider locale={language} messages={messages[language]}>
          <RouterProvider router={router} />
        </IntlProvider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);