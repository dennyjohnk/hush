import React from "react";
import "./MobileNavbar.css";

const MobileNavbar = () => {
  return (
    <React.Fragment>
      <div className="mobile-nav-icon-container">
        <div id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav-label">
          <label className="navbar-home-label">Home</label>
        </div>
      </div>
      <div id="menu" className="menu">
        <label className="hush-feed-label">HUSH FEED</label>
        <div className="mobile-nav-home">
          <span>Home</span>
        </div>
        <div className="mobile-nav-popular">
          <span>Popular</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileNavbar;
