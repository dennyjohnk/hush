import React from "react";
import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div>
      <div className="post-container">
        <div className="post-skeleton">
          <div className="avatar"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
