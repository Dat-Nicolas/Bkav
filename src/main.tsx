import { ThemeProvider } from "./contexts/ThemeContext";
import "@/assets/styles/main.css";
import { StrictMode, useState, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router";
import { MESSAGES, LOCALES } from "../src/libs/src/message";
import { IntlProvider } from "react-intl";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import FacebookLogin from 'react-facebook-login';
// import { FacebookProvider } from 'react-facebook-login';

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
  const [fbUser, setFbUser] = useState(null);
  const [language, setLanguage] = useState(LOCALES.VIETNAM);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const messages = {
    [LOCALES.ENGLISH]: MESSAGES[LOCALES.ENGLISH],
    [LOCALES.VIETNAM]: MESSAGES[LOCALES.VIETNAM],
  };

  const responseFacebook = (response) => {
    if (response.accessToken) {
      setFbUser(response);
      console.log('Facebook login success:', response);
    } else {
      console.log('Facebook login failed:', response);
    }
  };

  const login = () => {
  };


  return (
    // <FacebookProvider clientId="9413488392083048">

    <GoogleOAuthProvider clientId="481653149870-6pt1h942udqrn5esa21rhupusfgqnba2.apps.googleusercontent.com">
    <ThemeProvider>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <IntlProvider locale={language} messages={messages[language]}>
          <RouterProvider router={router} />
        </IntlProvider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
    </ThemeProvider>
    </GoogleOAuthProvider>
    // </FacebookProvider>

  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);