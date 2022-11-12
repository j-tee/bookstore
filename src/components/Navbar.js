import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/fontawesome-free-solid';
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
      <div className="nav-link">
        <div className="title-cms">Book Store CMS</div>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} activeclassname="active-link">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <FontAwesomeIcon icon={faUser} color="blue" />
    </nav>
  );
};
export default Navbar;
