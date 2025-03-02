import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import {
  toggleTask,
  removeTask,
  selectFilteredTasks,
} from "../redux/taskSlice";
import { FaTrash } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import toast from "react-hot-toast";
import Button from "./button";
import { useCallback } from "react";

const TaskList = () => {
  const dispatch = useAppDispatch();
  const filteredTasks = useAppSelector(selectFilteredTasks);

  const handleRemoveTask = useCallback(
    (taskId: string, taskName: string) => {
      dispatch(removeTask(taskId));
      toast.success(`Task "${taskName}" removed successfully`);
    },
    [dispatch]
  );

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
            <Button
              onClick={() => dispatch(toggleTask(task.id))}
              className="mr-2 text-gray-500 hover:text-green-400 dark:text-gray-300 dark:hover:text-green-400 cursor-pointer
              rounded-sm border p-2"
            >
              {task.completed ? <FaUndo /> : <FaCheck />}
            </Button>
            <Button
              onClick={() => handleRemoveTask(task.id, task.name)}
              className="text-gray-500 hover:text-red-400/90 dark:text-gray-200 dark:hover:text-red-700/90 cursor-pointer rounded-sm border p-2
              "
            >
              <FaTrash />{" "}
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
