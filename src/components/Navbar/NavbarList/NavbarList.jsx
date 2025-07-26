import React, { useContext } from 'react';
import NavbarListItems from '../NavbarListItems/NavbarListItems'
import { NavbarContext } from '../../../Context/NavbarContext';

const NavbarList = () => {
  
const {DataNavbar} = useContext(NavbarContext)

  return (
    <ul className="flex">
      {DataNavbar.map((item, index) => (
        <NavbarListItems key={index} to={item.to} content={item.content} />
      ))}
    </ul>
  );
};

export default NavbarList;