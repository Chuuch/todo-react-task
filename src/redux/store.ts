import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice.ts";
import themeReducer from "./themeSlice.ts";

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        theme: themeReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;