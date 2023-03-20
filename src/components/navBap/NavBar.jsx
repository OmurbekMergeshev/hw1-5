import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/userlist">UserList</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
