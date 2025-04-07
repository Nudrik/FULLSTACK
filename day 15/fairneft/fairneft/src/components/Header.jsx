import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css"

function Header() {
  return (
    <>
      <header className="main-header">
        <div>
          <img src={logo} alt="Fairneft" />
        </div>
        <div className="nav-links">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div>
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </header>
    </>
  );
}

export default Header;
