import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    Children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);
export default router;
