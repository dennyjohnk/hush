import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../images/hush-logo.svg";
import BrandName from "../../images/hush-text.svg";

const Navbar = props => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="inline-block">
          <Link to="/">
            <img src={Logo} alt="logo" className="brand-logo" />
            <img src={BrandName} alt="logo" className="brand-text" />
            <ul className="right"></ul>
          </Link>
        </div>
        <div className="pull-right inline-block">
          <img src={Logo} alt="logo" className="brand-logo" />
        </div>
      </div>
    </header>
  );
};

export default withRouter(Navbar);
