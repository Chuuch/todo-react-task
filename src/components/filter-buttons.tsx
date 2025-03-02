import { useDispatch } from "react-redux";
import { setFilter } from "../redux/taskSlice";
import Button from "./button";

const FilterButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="mb-4">
      <Button
        onClick={() => dispatch(setFilter("all"))}
        className="mr-2 hover:text-blue-500 dark:text-gray-200 cursor-pointer dark:hover:text-amber-400"
      >
        All
      </Button>
      <Button
        onClick={() => dispatch(setFilter("completed"))}
        className="mr-2 hover:text-blue-500 dark:text-gray-200 cursor-pointer dark:hover:text-amber-400"
      >
        Completed
      </Button>
      <Button
        onClick={() => dispatch(setFilter("pending"))}
        className="mr-2 hover:text-blue-500 dark:text-gray-200 cursor-pointer dark:hover:text-amber-400"
      >
        Pending
      </Button>
    </div>
  );
};

export default FilterButtons;
