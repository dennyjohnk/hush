import React from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../images/hush-logo.svg";
import ProfileUser from "../../images/ProfileUser.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="logo-block">
          <Link to="/">
            <img src={Logo} alt="logo" className="brand-logo" />
          </Link>
        </div>
        <div className="search-block">
          <form
            action=""
            id="search"
            role="search"
            autoComplete="off"
            className="search-form"
          >
            <input
              type="text"
              placeholder="Search Hush"
              className="search-box"
            />
          </form>
        </div>
        <div className="user-profile-block">
          <img
            src={ProfileUser}
            alt="logo"
            className="brand-logo profile-pic"
          />
        </div>
      </header>
    </div>
  );
};

export default withRouter(Navbar);
