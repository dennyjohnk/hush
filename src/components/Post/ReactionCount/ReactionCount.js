import React from "react";
import LikeReaction from "../../../images/reactions/LikeReaction.svg";
import HeartReaction from "../../../images/reactions/HeartReaction.svg";
import ClapReaction from "../../../images/reactions/ClapReaction.svg";
import SuperbReaction from "../../../images/reactions/SuperbReaction.svg";
import DislikeReaction from "../../../images/reactions/DislikeReaction.svg";
import "./ReactionCount.css";

const ReactionCount = props => {
  const post = props.post;
  return (
    <div className="reaction-count-container">
      <div className="reaction-count-icon-container inline-block">
        <img src={LikeReaction} alt="like" />
        <span>{post.likeCount}</span>
      </div>
      <div className="reaction-count-icon-container inline-block">
        <img src={HeartReaction} alt="heart" />
        <span>{post.heartCount}</span>
      </div>
      <div className="reaction-count-icon-container inline-block">
        <img src={ClapReaction} alt="clap" />
        <span>{post.clapCount}</span>
      </div>
      <div className="reaction-count-icon-container inline-block">
        <img src={SuperbReaction} alt="super" />
        <span>{post.superbCount}</span>
      </div>
      <div className="reaction-count-icon-container inline-block">
        <img src={DislikeReaction} alt="dislike" />
        <span>{post.dislikeCount}</span>
      </div>
    </div>
  );
};

export default ReactionCount;
