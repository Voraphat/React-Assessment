import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Homeadmin from "./Components/Homeadmin.jsx";
import Homeuser from "./Components/Homeuser.jsx";
import Owner from "./Components/Owner.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./Components/context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/homeuser",
    element: <Homeuser />,
  },
  {
    path: "/homeadmin",
    element: <Homeadmin />,
  },
  {
    path: "/owner",
    element: <Owner />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
