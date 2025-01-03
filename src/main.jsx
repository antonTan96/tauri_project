import React from "react";
import ReactDOM from "react-dom/client";
import { routes } from "./routes.jsx";
import { RouterProvider } from "react-router-dom";
import "./styles/styles.css";
import "./fonts/MadimiOne-Regular.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);