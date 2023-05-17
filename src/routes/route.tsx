import { createBrowserRouter } from "react-router-dom";
import { Home } from "../app/home";
import { Form } from "../app/form";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "form",
    element: <Form />,
  },
]);
