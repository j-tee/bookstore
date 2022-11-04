import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/category',
      text: 'Categories',
    },
  ];
  return (
    <nav className="navBar">
      <span className="title">Book Store</span>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeclassname="active-link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
