import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TodoApp from "./TodoApp.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster position="top-center" />
      <TodoApp />
    </Provider>
  </StrictMode>
);
