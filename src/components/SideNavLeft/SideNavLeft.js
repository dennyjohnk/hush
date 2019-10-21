import React from "react";
import "./SideNavLeft.css";
import HomeIcon from "../../images/HomeIcon.svg";
import PopularIcon from "../../images/PopularIcon.svg";
import ShapeRight from "../../images/ShapeRight.svg";
class SideNavLeft extends React.Component {
  render() {
    return (
      <div className="sidenav-left">
        <div className="feed-group">
          <div className="hush-feed-label">HUSH FEED</div>
          <div className="channel cursor-pointer">
            <img src={HomeIcon} alt="Home" className="channel-logo" />
            <span className="channel-name">Home</span>
            <div className="channel-active-icon-container">
              <img src={ShapeRight} alt="icon right" />
            </div>
          </div>
          <div className="channel cursor-pointer">
            <img src={PopularIcon} alt="Popular" className="channel-logo" />
            <span className="channel-name">Popular</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNavLeft;
