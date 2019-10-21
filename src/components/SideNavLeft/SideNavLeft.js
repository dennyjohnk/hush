import React from "react";
import "./SideNavLeft.css";
import HomeIcon from "../../images/HomeIcon.svg";
import PopularIcon from "../../images/PopularIcon.svg";

class SideNavLeft extends React.Component {
  render() {
    return (
      <div className="sidenav-left">
        <div className="feed-group">
          <div className="hush-feed-label">HUSH FEED</div>
          <div className="channel cursor-pointer">
            <img src={HomeIcon} alt="Home" />
            <span className="channel-name">Home</span>
          </div>
          <div className="channel cursor-pointer">
            <img src={PopularIcon} alt="Popular" />
            <span className="channel-name">Popular</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNavLeft;
