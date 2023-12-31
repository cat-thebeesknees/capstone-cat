import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
// import Root, { loader as rootLoader } from "./routes/root";
import Root from "./routes/root";
import "./index.css";
import Guest from "./routes/Guest";
import LoginUser from "./routes/Login";
import Register from "./routes/Register";
// import AllProducts, {loader as productLoader,
// } from "./routes/AllProducts";
import AllProducts from "./routes/AllProducts";
import SingleProductCard from "./routes/SingleProductCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader:rootLoader,
    children: [
      {
        path: "guest",
        element: <Guest />,
        children: [
          {
            path: "all-products",
            element: <AllProducts />,
            // loader: productLoader,
            children: [
              {
                path: "single-product-card",
                element: <SingleProductCard />,
              },
              {
                path: ":id",
                element: <SingleProductCard />,
              },
            ],
          },
        ],
      },
      {
        path: "login",
        element: <LoginUser />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
