import React from "react";
import "./SideNavRight.css";

class SideNavRight extends React.Component {
  render() {
    return (
      <div className="sidenav-right">
        <div className="feed-group pull-right ask-a-question-block">
          <div>
            <span>Ask a question</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNavRight;
