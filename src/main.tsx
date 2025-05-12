import "@/assets/styles/main.css";
import { StrictMode, useState, createContext, useContext, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router"; 
import router from "./router";
import { MESSAGES, LOCALES } from "../src/libs/src/message";
import { IntlProvider } from "react-intl";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useThemeStore } from "./store/themeStore";

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
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const messages = {
    [LOCALES.ENGLISH]: MESSAGES[LOCALES.ENGLISH],
    [LOCALES.VIETNAM]: MESSAGES[LOCALES.VIETNAM],
  };

  return (
    <GoogleOAuthProvider clientId="481653149870-6pt1h942udqrn5esa21rhupusfgqnba2.apps.googleusercontent.com">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <IntlProvider locale={language} messages={messages[language]}>
            <RouterProvider router={router} />
          </IntlProvider>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </GoogleOAuthProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);