import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks"
import { toggleDarkMode } from "../themeSlice";


const useDarkMode = () => {
    const dispatch = useAppDispatch();
    const darkMode = useAppSelector((state) => state.theme.darkMode);
    
    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    },[darkMode]);

    const toggleTheme = () => dispatch(toggleDarkMode());

    return { darkMode, toggleTheme };
}

export default useDarkMode;