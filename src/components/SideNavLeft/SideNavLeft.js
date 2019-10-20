import React from "react";
import "./SideNavLeft.css";

class SideNavLeft extends React.Component {
  render() {
    return (
      <div className="sidenav-left">
        <div>
          <h4>Hush Feed</h4>
          <ul>
            <li className="">Home</li>
            <li className="">Popular</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideNavLeft;
