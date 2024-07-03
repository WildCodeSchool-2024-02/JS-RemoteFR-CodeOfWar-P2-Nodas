import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Accueil from "./pages/Accueil";
import Catalogue from "./pages/Catalogue";
import Category from "./pages/Category";
import Categories from "./pages/Categories";
import Favoris from "./pages/Favoris";
import Basket from "./pages/Basket";
import About from "./pages/About";
import GamePage from "./pages/GamePage";

import { fetchData, fetchGameInfo, fetchCategories } from "./services/request";

import "./styles/app.css";
import "./styles/gamespages.css";
import "./styles/navbar.css";
import "./styles/categorieitem.css";
import "./styles/categories.css";

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
        loader: fetchCategories,
      },
      {
        path: "/category",
        element: <Category />,
        loader: fetchData,
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
      {
        path: "/gamepage/:id",
        element: <GamePage />,
        loader: () => fetchGameInfo().then((data) => data),
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
