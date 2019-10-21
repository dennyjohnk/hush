import React from "react";
import { connect } from "react-redux";
import Post from "../../components/Post/Post";
import Skeleton from "../../components/Skeleton/Skeleton";
import "./Feed.css";

class Feed extends React.Component {
  render() {
    const post = this.props.post ? (
      <div>
        <Post post={this.props.post} />
      </div>
    ) : (
      <Skeleton />
    );
    return <div className="main">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;

  return {
    post: state.posts.items.find(post => post.url === id)
  };
};

Feed = connect(
  mapStateToProps,
  null
)(Feed);

export default Feed;
