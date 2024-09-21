import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Context from "./utils/Context";
import About from "./components/About";
import Contacts from "./components/Contacts";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contacts />,
    },
  ]);
  return (
    <Context>
      <RouterProvider router={router} />
    </Context>
  );
};

export default App;
