import { useEffect } from "react";
import { loadTasks } from "./redux/taskSlice";
import TaskList from "./components/task-list";
import TaskForm from "./components/task-form";
import FilterButtons from "./components/filter-buttons";
import DarkModeToggle from "./components/dark-mode-toggle";
import { useAppDispatch } from "./redux/hooks/hooks";

const TodoApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center min-h-screen w-full dark:bg-gray-900">
      <div className="w-full max-w-lg shadow-lg dark:shadow-2xl p-6 rounded-xl">
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
