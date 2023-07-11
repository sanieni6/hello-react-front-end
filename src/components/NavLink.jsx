import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => (
  <nav className="nav-bar">
    <ul className="nav-bar-links">
      <li className="nav-bar-link">
        <NavLink className="link" to="/">Home</NavLink>
      </li>
      <li className="nav-bar-link">
        <NavLink className="link" to="/greetings">Greetings</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavLinks;
