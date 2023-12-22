import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserHome from "../Pages/Dashboard/User/UserHome";
import AddTask from "../Pages/Dashboard/User/addTask";
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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "add-task",
        element: <AddTask />,
      },
    ],
  },
]);
export default router;
