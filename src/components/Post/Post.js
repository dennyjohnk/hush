import React from "react";
import Tag from "../Tag/Tag";
import Reaction from "../Reaction/Reaction";
import { withRouter } from "react-router-dom";
import "./Post.css";

const Post = props => {
  const post = props.post;
  return (
    <div className="post-container" key={post.id}>
      <img src={post.userImage} alt="A Pokeball" className="user-dp" />
      <div className="post-content">
        <div
          className="cursor-pointer"
          onClick={() => props.history.push("/post/" + post.url)}
        >
          <span className="post-title">
            {post.title}
            {post.likeCount}
          </span>
        </div>
        <p>{post.description}</p>
      </div>
      <div className="post-toolbar">
        <Reaction post={post} />
      </div>
      <div className="post-footer">
        <div className="post-tags">
          {post.tags.map((tag, index) => {
            return <Tag tag={tag} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Post);
