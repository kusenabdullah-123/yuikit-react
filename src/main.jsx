import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Kelas from "./Kelas.jsx";
import Insert from "./Insert.jsx";
import { ErrorPage } from "./index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "kelas/",
        element: <Kelas />,
      },
      {
        path: "kelas/insert",
        element: <Insert />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
