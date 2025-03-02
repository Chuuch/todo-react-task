import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "./store.ts";

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action);
    const state: RootState = store.getState();

    if (state.tasks.tasks) {
        localStorage.setItem("tasks", JSON.stringify(state.tasks.tasks));
    }

    if (state.theme.darkMode !== undefined) {
        localStorage.setItem("darkMode", JSON.stringify(state.theme.darkMode));
    }
    return result;
}