import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarListItems = ({ to, content }) => {
  return (
    <li className="mx-6">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'text-[var(--primary-color)] font-bold'
            : 'text-[var(--text-item-color)] hover:text-[var(--primary-color)] transition duration-300 font-poppins font-medium text-base'
        }
      >
        {content}
      </NavLink>
    </li>
  );
};

export default NavbarListItems;
