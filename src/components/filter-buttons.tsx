import { useDispatch } from "react-redux";
import { setFilter } from "../redux/taskSlice";

const FilterButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="mb-4">
      <button
        onClick={() => dispatch(setFilter("all"))}
        className="mr-2 hover:text-blue-500 dark:text-gray-200 cursor-pointer dark:hover:text-amber-400"
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter("completed"))}
        className="mr-2 hover:text-blue-500 dark:text-gray-200 cursor-pointer dark:hover:text-amber-400"
      >
        Completed
      </button>
      <button
        onClick={() => dispatch(setFilter("pending"))}
        className="mr-2 hover:text-blue-500 dark:text-gray-200 cursor-pointer dark:hover:text-amber-400"
      >
        Pending
      </button>
    </div>
  );
};

export default FilterButtons;
