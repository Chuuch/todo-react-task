import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = () => {
    if (taskName.trim() === "") return;
    dispatch(addTask({ name: taskName, description: taskDescription }));
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="border dark:border-white dark:outline-0 dark:text-gray-400 p-2 w-full mb-2 rounded-lg"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        className="border dark:border-white dark:text-gray-400 dark:outline-0 rounded-lg p-2 w-full mb-2"
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-500/90 dark:bg-orange-500 rounded-2xl dark:hover:bg-orange-400/90 cursor-pointer text-white px-4 py-2 w-full"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
