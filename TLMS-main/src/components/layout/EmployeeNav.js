// import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  const history = useNavigate();
  const logout = () => {
    localStorage.removeItem("email");
    history("./login");
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>THAPAR LAUNDRY MANAGEMENT SYSTEM</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            {localStorage.getItem("email") && (
              <NavLink
                to="/EmployeeOrders"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                All Orders
              </NavLink>
            )}
          </li>
          <li>
            {localStorage.getItem("email") && (
              <NavLink
                to="/new-order"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                View Comments
              </NavLink>
            )}
          </li>
          <li>
            <NavLink
              to="/login"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              {localStorage.getItem("email") && (
                <button className="btn--flat2" onClick={logout}>
                  Log Out
                </button>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
