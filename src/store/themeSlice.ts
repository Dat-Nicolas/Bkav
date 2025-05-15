import { configureStore, createSlice } from "@reduxjs/toolkit";

// Theme Slice
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

// Redux Store
export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

// Type for the store's state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;