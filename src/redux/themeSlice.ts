import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ThemeState {
    darkMode: boolean;
}

const initialState: ThemeState = {
    darkMode: JSON.parse(localStorage.getItem("darkMode") || "false"),
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode =!state.darkMode;
            localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
        },
    },
});

export const { toggleDarkMode} = themeSlice.actions;
export const selectDarkMode = (state: RootState) => state.theme.darkMode;
export default themeSlice.reducer;