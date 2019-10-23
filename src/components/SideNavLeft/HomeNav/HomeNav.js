import React from "react";
import { withRouter } from "react-router-dom";
import HomeIcon from "../../../images/HomeIcon.svg";
import PopularIcon from "../../../images/PopularIcon.svg";
import "./HomeNav.css";

const HomeNav = props => {
  return (
    <div className="feed-group">
      <div className="hush-feed-label">HUSH FEED</div>
      <div
        className={
          props.location.pathname === "/"
            ? "active-tab channel cursor-pointer"
            : "channel cursor-pointer"
        }
        onClick={() => props.history.push("/")}
      >
        <img src={HomeIcon} alt="Home" className="channel-logo" />
        <span className="channel-name">Home</span>
      </div>
      <div className="channel cursor-pointer">
        <img src={PopularIcon} alt="Popular" className="channel-logo" />
        <span className="channel-name">Popular</span>
      </div>
    </div>
  );
};

export default withRouter(HomeNav);
