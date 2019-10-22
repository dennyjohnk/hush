import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Post from "../../components/Post/Post";
import Skeleton from "../../components/Skeleton/Skeleton";
import "./Home.css";

class Home extends React.Component {
  render() {
    const { posts } = this.props;

    const postList = posts.length ? (
      posts.map(post => {
        return <Post post={post} key={post.id} />;
      })
    ) : (
      <Skeleton count={3} />
    );

    return <div className="main">{postList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.items
  };
};
Home = connect(
  mapStateToProps,
  null
)(Home);
export default withRouter(Home);
