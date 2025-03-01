
# Todo App

A simple and elegant Todo app built with modern technologies like React, TypeScript, Vite, TailwindCSS, and Redux Toolkit. This app provides a clean user interface, theme toggling with dark mode support, and task management functionality with persistent data using localStorage.

## Features

- **Task Management**: Add, edit, and delete tasks with ease.
- **Persistent Storage**: Tasks are stored locally in the browser using `localStorage`, ensuring data persistence even after page reloads.
- **Dark Mode**: Seamless dark mode toggle implemented through Redux and localStorage.
- **Responsive Design**: Fully responsive layout that works on all devices.
- **Optimized Performance**: Built with Vite for fast bundling and hot module reloading.
  
## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly-typed programming language that builds on JavaScript, providing static type checking.
- **Vite**: A next-generation, fast build tool optimized for modern web development.
- **TailwindCSS**: A utility-first CSS framework for building custom designs without having to leave your HTML.
- **Redux Toolkit**: A powerful toolset for managing state in JavaScript applications with Redux.
- **localStorage**: Used for storing tasks and theme preference (dark mode) persistently in the browser.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Chuuch/todo-react-task
   ```

2. **Navigate to the project directory:**

   ```bash
   cd todo-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

## Dark Mode Feature

The app supports **Dark Mode**. You can toggle between light and dark themes by clicking the sun/moon icon at the top-right of the app. The theme preference is stored in `localStorage` so that it persists even after you close and reopen the browser.

### How it Works:
- The dark mode state is managed using **Redux Toolkit**.
- The theme is stored in `localStorage` for persistence across page reloads.
- TailwindCSS is used for styling with the `dark` class, which changes the appearance of the app when dark mode is enabled.

## Deployment

The app is deployed on **Vercel** for easy access and hosting.

You can access the live demo here:

[**Live Demo**]([https://your-vercel-deployment-link.com](https://todo-react-task-4oitqdmxx-chuchulev.vercel.app/))
