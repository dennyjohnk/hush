import React from "react";
import "./Skeleton.css";

const Skeleton = props => {
  const n = props.count;

  return [...Array(n)].map((e, i) => (
    <div className="post-container" key={i}>
      <div className="post-skeleton">
        <div className="avatar-skeleton">
          <div className="avatar"></div>
          <div className="avatar-line"></div>
          <div className="avatar-line"></div>
        </div>
        <div className="description-skeleton">
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="line"></div>
      </div>
    </div>
  ));
};

export default Skeleton;
