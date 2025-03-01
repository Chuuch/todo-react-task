import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, selectDarkMode } from "../redux/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => {
        dispatch(toggleDarkMode());
      }}
      className="p-2 bg-gray-200 dark:bg-gray-600 rounded cursor-pointer"
    >
      {darkMode ? <FaSun className="dark:text-gray-200" /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
