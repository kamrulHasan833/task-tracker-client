import { CiHome, CiLogout, CiUser } from "react-icons/ci";

import { BsListTask } from "react-icons/bs";
import { MdDashboard, MdTaskAlt } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAlert from "../Hooks/useAlert";
import useAuth from "../Hooks/useAuth";

const Sidebar = () => {
  const { logout, user, loading } = useAuth();
  const navigate = useNavigate();
  const alert = useAlert();

  const { displayName, photoURL } = user ? user : {};
  const avatar = photoURL ? photoURL : `${location.origin}/no-avater.jpg`;
  const mainPath = "/dashboard";

  const userItems = [
    {
      id: 1,
      name: "user dashboard",
      path: `${mainPath}/user-home`,
      icon: <CiUser className="text-2xl md:text-2xl " />,
    },
    {
      id: 2,
      name: "Add Task",
      path: `${mainPath}/add-task`,
      icon: <MdTaskAlt className="text-2xl md:text-2xl " />,
    },
    {
      id: 3,
      name: "Your Tasks",
      path: `${mainPath}/tasks`,
      icon: <BsListTask className="text-2xl md:text-2xl " />,
    },
  ];

  const commonItems = [
    {
      id: 1,
      name: "home",
      path: `/`,
      icon: <CiHome className="text-xl" />,
    },
  ];

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "If wanna logout, click Ok!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        logout()
          .then(() => {
            alert("Logged out successfully", "success");
            navigate("/");
          })
          .catch(() => alert("Logged out failed", "error"));
      }
    });
  };

  return (
    <div className="drawer xl:drawer-open capitalize">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content absolute xl:hidden">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className=" btn bg-transparent border-none mt-6 ml-6 md:ml-10 drawer-button xl:hidden hover:bg-transparent fixed z-20 xl:static"
          title="Open Dashboard"
        >
          <MdDashboard className="text-3xl md:text-4xl text-secondary-color bg-transparent " />
        </label>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay opacity-0"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-primary-color text-base-content font-cinzel xl:fixed">
          {/* Sidebar content here */}
          <li>
            {" "}
            {user && !loading && (
              <div className={`flex flex-col items-center mb-4 md:mb-6 gap-1 `}>
                <div
                  tabIndex={0}
                  className=" mt-2 w-12  rounded-full border cursor-pointer"
                >
                  <img src={avatar} alt="" className=" rounded-full " />
                </div>
                {displayName && (
                  <h3
                    className={` text-sm text-white font-medium text-center hover:bg-transparent`}
                  >
                    {displayName && displayName}
                  </h3>
                )}
              </div>
            )}
          </li>

          {/* user menu items */}
          {userItems.map(({ id, name, icon, path }) => (
            <li key={id}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  ` text-base ${
                    isActive
                      ? ""
                      : "text-white  hover:bg-white hover:bg-opacity-10"
                  }`
                }
              >
                {icon} {name}
              </NavLink>
            </li>
          ))}

          <li>
            <div>
              <Link
                to="/"
                className="flex flex-col  text-title-color gap-0 items-start mt-6 md:mt-10 mb-3 "
              >
                <img
                  src="https://i.ibb.co/C9kH49m/logo.png"
                  alt=""
                  className="w-36"
                />
              </Link>
            </div>
          </li>
          {/* common menu items */}
          {commonItems.map(({ id, name, icon, path }) => (
            <li key={id}>
              <NavLink
                to={path}
                className={"text-white  hover:bg-white hover:bg-opacity-10"}
              >
                {icon} {name}
              </NavLink>
            </li>
          ))}
          <li>
            {" "}
            <button
              className="text-white  hover:bg-white hover:bg-opacity-10 text-base  "
              onClick={handleLogout}
            >
              {" "}
              <CiLogout className="text-base md:text-xl" /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
