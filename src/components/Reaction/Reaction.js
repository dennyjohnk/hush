import React from "react";
import { connect } from "react-redux";
import "./Reaction.css";
import {
  likePost,
  lovePost,
  clapPost,
  superPost,
  dislikePost
} from "../../actions/postAction";

class Reaction extends React.Component {
  //Like the post
  handleLikeClick = () => {
    this.props.dispatch(likePost(this.props.post.id));
  };

  //Love the post
  handleLoveClick = () => {
    this.props.dispatch(lovePost(this.props.post.id));
  };

  //Clap the post
  handleClapClick = () => {
    this.props.dispatch(clapPost(this.props.post.id));
  };

  //super the post
  handleSuperClick = () => {
    this.props.dispatch(superPost(this.props.post.id));
  };

  //dislike the post
  handleDislikeClick = () => {
    this.props.dispatch(dislikePost(this.props.post.id));
  };
  render() {
    return (
      <div className="center">
        <button className="btn grey" onClick={() => this.handleLikeClick()}>
          Like
        </button>

        <button className="btn grey" onClick={this.handleLoveClick}>
          Love
        </button>

        <button className="btn grey" onClick={this.handleClapClick}>
          Clap
        </button>

        <button className="btn grey" onClick={this.handleSuperClick}>
          Super
        </button>

        <button className="btn grey" onClick={this.handleDislikeClick}>
          Dislike
        </button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

export default connect(mapStateToProps)(Reaction);
