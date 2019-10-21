import React from "react";
import Tag from "../Tag/Tag";
//import Reaction from "../Reaction/Reaction";
import { withRouter } from "react-router-dom";
import ActionBar from "../Action/Action";
import UserInfo from "./UserInfo/UserInfo";
import CompanyInfo from "./Company/Company";
import ReactionCount from "./ReactionCount/ReactionCount";
import "./Post.css";

const Post = props => {
  const post = props.post;
  return (
    <div className="post-container" key={post.id}>
      {post.companyName ? <CompanyInfo companyName={post.companyName} /> : ""}
      <UserInfo post={post} />
      <div
        className="cursor-pointer post-title"
        onClick={() => props.history.push("/post/" + post.url)}
      >
        {post.title}
      </div>
      <p className="truncate-description post-description">
        {post.description}
      </p>
      <ActionBar post={post} />
      <div className="line"></div>
      <div className="post-footer">
        <div className="post-tags">
          {post.tags.slice(0, 3).map((tag, index) => {
            return <Tag tag={tag} key={index} />;
          })}
        </div>
      </div>
      <ReactionCount post={post} />
    </div>
  );
};

export default withRouter(Post);
