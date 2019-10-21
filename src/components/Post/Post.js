import React from "react";
import Footer from "./Footer/Footer";
import { withRouter } from "react-router-dom";
import ActionBar from "../Action/Action";
import UserInfo from "./UserInfo/UserInfo";
import CompanyInfo from "./Company/Company";
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
      <div className="break-line"></div>
      <div className="post-footer">
        <Footer post={post} />
        <div className="post-tags"></div>
      </div>
    </div>
  );
};

export default withRouter(Post);
