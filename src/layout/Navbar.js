import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/GIPHY270px.png"
function Navbar() {
  return <nav className="nav">
    <img className="nav__logo" src={Logo} alt="" />
    <ul className="nav__ele">
      <li className="nav__ele--item">
        <Link to="/">Reactions</Link>
      </li>
      <li className="nav__ele--item">
        <Link to="/">Entertainment</Link>
      </li>
      <li className="nav__ele--item">
        <Link to="/">Sports</Link>
      </li>
      <li className="nav__ele--item">
        <Link to="/">Stickers</Link>
      </li>
      <li className="nav__ele--item">
        <Link to="/">Artists</Link>
      </li>
      <li className="nav__ele--item">
        <Link to="/">:</Link>
      </li>
    </ul>
    <div className="nav__btn">
      <button>Upload</button>
      <button>Create</button>
    </div>
    <div className="nav__acc">
      <img src="https://media.giphy.com/avatars/default2/80h.gif" alt="look around" class="nav__acc--img" />
      <p className="nav__acc--name">madan_naik</p>
      <p className="nav__acc--down">▾</p>
    </div>
  </nav>;
}

export default Navbar;
