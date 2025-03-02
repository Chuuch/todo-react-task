import { FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from "../redux/hooks/useDarkMode";
import Button from "./button";

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useDarkMode();

  return (
    <Button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-600 rounded cursor-pointer"
    >
      {darkMode ? <FaSun className="dark:text-gray-200" /> : <FaMoon />}
    </Button>
  );
};

export default DarkModeToggle;
