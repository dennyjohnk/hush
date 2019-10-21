import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../images/hush-logo.svg";
import ProfileUser from "../../images/ProfileUser.jpg";

const Navbar = props => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="inline-block">
          <Link to="/">
            <img src={Logo} alt="logo" className="brand-logo" />
          </Link>
        </div>
        <div className="pull-right inline-block">
          <img
            src={ProfileUser}
            alt="logo"
            className="brand-logo profile-pic"
          />
        </div>
      </div>
    </header>
  );
};

export default withRouter(Navbar);
