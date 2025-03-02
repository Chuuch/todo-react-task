import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { toggleTask, removeTask } from "../redux/taskSlice";
import { FaTrash } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import toast from "react-hot-toast";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filter = useSelector((state: RootState) => state.tasks.filter);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const handleRemoveTask = (taskId: string, taskName: string) => {
    dispatch(removeTask(taskId));
    toast.success(`Task "${taskName}" removed successfully`);
  };

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between p-2 border-b dark:text-gray-200"
        >
          <div>
            <p className={task.completed ? "line-through" : ""}>{task.name}</p>
            <p className="text-sm text-gray-500">{task.description}</p>
          </div>
          <div>
            <button
              onClick={() => dispatch(toggleTask(task.id))}
              className="mr-2 text-gray-500 hover:text-green-400 dark:text-gray-300 dark:hover:text-green-400 cursor-pointer
              rounded-sm border p-2"
            >
              {task.completed ? <FaUndo /> : <FaCheck />}
            </button>
            <button
              onClick={() => handleRemoveTask(task.id, task.name)}
              className="text-gray-500 hover:text-red-400/90 dark:text-gray-200 dark:hover:text-red-700/90 cursor-pointer rounded-sm border p-2
              "
            >
              <FaTrash />{" "}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
