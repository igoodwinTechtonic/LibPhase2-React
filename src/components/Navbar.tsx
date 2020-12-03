import * as React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="menu__box" id="ham-nav">
      <Link className="menu__item" to=""><li className="header__link-text">Home</li></Link>
      <Link className="menu__item" to="bookshelf"><li className="header__link-text">Bookshelf</li></Link>
      <Link className="menu__item" to="add"><li className="header__link-text">Add Book</li></Link>
    </ul>
  );
};

export default NavBar;
