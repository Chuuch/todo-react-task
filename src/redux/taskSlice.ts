import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Task {
    id: string;
    name: string;
    description: string;
    completed: boolean;
}

interface TaskState {
    tasks: Task[];
    filter: "all" | "completed" | "pending";
}

const loadTasksFromLocalStorage = (): Task[] => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
};

const saveTasksToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const initialState: TaskState = {
    tasks: loadTasksFromLocalStorage(),
    filter: "all"
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ name: string; description: string }>) => {
            const newTask: Task = {
                id: Date.now().toString(),
                name: action.payload.name,
                description: action.payload.description,
                completed: false,
            };
            state.tasks.push(newTask);
            saveTasksToLocalStorage(state.tasks);
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            saveTasksToLocalStorage(state.tasks);
        },
        toggleTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed =!task.completed;
                saveTasksToLocalStorage(state.tasks);
            }
        },
        setFilter: (state, action: PayloadAction<TaskState["filter"]>) => {
            state.filter = action.payload;
        },
        loadTasks: (state) => {
            state.tasks = loadTasksFromLocalStorage();
        }
    }
});

export const selectFilteredTasks = createSelector(
    (state: RootState) => state.tasks.tasks,
    (state: RootState) => state.tasks.filter,
    (tasks, filter) => {
        if (filter === "completed") return tasks.filter((task) => task.completed);
        if (filter === "pending") return tasks.filter((task) =>!task.completed);
        return tasks;
    }
)

export const {addTask, removeTask, toggleTask, setFilter, loadTasks} = taskSlice.actions;
export default taskSlice.reducer;

