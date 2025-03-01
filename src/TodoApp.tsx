import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTasks } from "./redux/taskSlice";
import TaskList from "./components/task-list";
import TaskForm from "./components/task-form";
import FilterButtons from "./components/filter-buttons";
import DarkModeToggle from "./components/dark-mode-toggle";

const TodoApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <div className="flex max-w-full max-h-full dark:bg-gray-900">
      <div className="max-w-lg h-screen mx-auto p-4 ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">TODO List</h1>
          <DarkModeToggle />
        </div>
        <TaskForm />
        <FilterButtons />
        <TaskList />
      </div>
    </div>
  );
};

export default TodoApp;
