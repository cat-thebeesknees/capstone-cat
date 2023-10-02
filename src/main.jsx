import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Root, { loader as rootLoader } from "./routes/root";
import "./index.css";
import Guest from "./routes/Guest";
import LoginUser from "./routes/Login";
import Register from "./routes/Register";
import AllProducts, {loader as productLoader,
} from "./routes/AllProducts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader:rootLoader,
     children: [
      {
      path: "/guest/products",
      element: <Guest />,
      children: [
        {
          path: "/products/:productId",
          element: <AllProducts />,
          loader: productLoader,
        },
      ]
      },
      {
        path: "/login/profile",
        element: <LoginUser />,
      },
      {
        path: "register/profile",
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
