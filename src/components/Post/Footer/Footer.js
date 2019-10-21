import React from "react";
import Tag from "../Tag/Tag";
import ReactionCount from "../ReactionCount/ReactionCount";
import "./Footer.css";

const Footer = props => {
  const tags = props.post.tags;
  const post = props.post;
  return (
    <div>
      <Tag tags={tags} />
      <ReactionCount post={post} />
    </div>
  );
};

export default Footer;
