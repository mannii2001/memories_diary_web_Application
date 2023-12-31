import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useNavigate } from "react-router";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => setClick(!click);
    const logout=()=>{
      localStorage.removeItem('jwtToken');
      navigate('/');
      window.location.reload();
    }
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              MemoDiary
              <i className="fas fa-code"></i>
            </NavLink>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={logout}
                >
                  Log Out
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar
