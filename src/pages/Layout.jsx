import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App-header">
      <div className="top-nav">
        <div>
          <NavLink
            to="/"
            exact className="nav-link" activeClassName="active"
          >
            relax
        </NavLink>
        </div>
        <div>
        <NavLink
            to="/contact"
            exact className="nav-link" activeClassName="active"
          >
            contact
        </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  )
};

export default Layout;