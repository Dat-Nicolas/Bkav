// import { ThemeProvider } from "./contexts/ThemeContext";
// import "@/assets/styles/main.css";
// import { StrictMode, useState, createContext, useContext } from "react";
// import { createRoot } from "react-dom/client";
// import { RouterProvider } from "react-router";
// import router from "./router";
// import { MESSAGES, LOCALES } from "../src/libs/src/message";
// import { IntlProvider } from "react-intl";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// // import FacebookLogin from 'react-facebook-login';
// // import { FacebookProvider } from 'react-facebook-login';
// import { useEffect } from 'react'
// import { useThemeStore } from './store/themeStore'
// import ThemeToggleButton from '../src/Components/ThemeToggleButton'




// // Language Context
// const LanguageContext = createContext<{
//   language: string;
//   setLanguage: (lang: string) => void;
// }>({
//   language: LOCALES.VIETNAM,
//   setLanguage: () => {},
// });

// export const useLanguage = () => useContext(LanguageContext);

// const ThemeContext = createContext<{
//   theme: string;
//   toggleTheme: () => void;
// }>({
//   theme: "light",
//   toggleTheme: () => {},
// });

// export const useTheme = () => useContext(ThemeContext);

// const App = () => {
//   const [fbUser, setFbUser] = useState(null);
//   const [language, setLanguage] = useState(LOCALES.VIETNAM);
//   const theme = useThemeStore((state) => state.theme)



//   useEffect(() => {
//     const root = window.document.documentElement
//     if (theme === 'dark') {
//       root.classList.add('dark')
//     } else {
//       root.classList.remove('dark')
//     }
//   }, [theme])

//   const messages = {
//     [LOCALES.ENGLISH]: MESSAGES[LOCALES.ENGLISH],
//     [LOCALES.VIETNAM]: MESSAGES[LOCALES.VIETNAM],
//   };

//   // const responseFacebook = (response) => {
//   //   if (response.accessToken) {
//   //     setFbUser(response);
//   //     console.log('Facebook login success:', response);
//   //   } else {
//   //     console.log('Facebook login failed:', response);
//   //   }
//   // };

//   // const login = () => {
//   // };


//   return (
//     // <FacebookProvider clientId="9413488392083048">
//     <GoogleOAuthProvider clientId="481653149870-6pt1h942udqrn5esa21rhupusfgqnba2.apps.googleusercontent.com">
//     <ThemeProvider>
//       <LanguageContext.Provider value={{ language, setLanguage }}>
//         <IntlProvider locale={language} messages={messages[language]}>
//           <RouterProvider router={router} />
//         </IntlProvider>
//       </LanguageContext.Provider>
//     </ThemeProvider>
//     </GoogleOAuthProvider>
//   );
// };

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );









// src/main.tsx
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

  // Áp dụng class "dark" vào root element
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