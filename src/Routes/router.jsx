import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Tasks from "../Pages/Dashboard/User/Tasks";
import UserHome from "../Pages/Dashboard/User/UserHome";
import AddTask from "../Pages/Dashboard/User/addTask";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
]);
export default router;
