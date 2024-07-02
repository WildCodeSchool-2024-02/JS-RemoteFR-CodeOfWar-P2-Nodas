import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./styles/app.css";
import "./styles/gamespages.css";
import "./styles/navbar.css";
import "./styles/categorieitem.css";

import Accueil from "./pages/Accueil";
import Catalogue from "./pages/Catalogue";
import Categories from "./pages/Categories";
import Favoris from "./pages/Favoris";
import Basket from "./pages/Basket";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/catalog",
        element: <Catalogue />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/favoris",
        element: <Favoris />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
