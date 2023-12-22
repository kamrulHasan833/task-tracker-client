import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function NavItem({ children, path }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          return isActive
            ? `text-base  border-b  border-secondary-color rounded-sm text-secondary-color hover:text-secondary-color bg-white hover:bg-white`
            : `text-base text-white  border-b border-transparent hover:border-secondary-color rounded-sm hover:text-secondary-color hover:bg-white`;
        }}
        to={path}
      >
        {children}
      </NavLink>
    </li>
  );
}
NavItem.propTypes = {
  children: PropTypes.node,
  path: PropTypes.node,
};
export default NavItem;
