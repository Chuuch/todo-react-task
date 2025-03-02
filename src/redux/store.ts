import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice.ts";
import themeReducer from "./themeSlice.ts";
import { localStorageMiddleware } from "./localStorageMiddleware.ts";

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;