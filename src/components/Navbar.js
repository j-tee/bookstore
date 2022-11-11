import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/category',
      text: 'CATEGORIES',
    },
  ];
  return (
    <nav className="navbar">
      <span className="title-cms">Book Store CMS</span>
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
