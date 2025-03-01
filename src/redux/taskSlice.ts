import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const initialState: TaskState = {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]" ),
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
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        toggleTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed =!task.completed;
            }
                localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        setFilter: (state, action: PayloadAction<TaskState["filter"]>) => {
            state.filter = action.payload;
        },
        loadTasks: (state) => {
            state.tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        }
    }
});

export const {addTask, removeTask, toggleTask, setFilter, loadTasks} = taskSlice.actions;
export default taskSlice.reducer;

