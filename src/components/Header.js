import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Comic Book App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Comic Books List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Comic Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
