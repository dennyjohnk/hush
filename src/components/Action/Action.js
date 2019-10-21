import React from "react";
import "./Action.css";
import HelpfullIcon from "../../images/HelpfullIcon.svg";
import AnswerIcon from "../../images/AnswerIcon.svg";
import FbIcon from "../../images/FbIcon.svg";
import TwitterIcon from "../../images/TwitterIcon.svg";
import ShareIcon from "../../images/ShareIcon.svg";

const ActionBar = () => {
  return (
    <div className="action-container">
      <div className="action-item cursor-pointer helpfull-block">
        <img src={HelpfullIcon} alt="" className="help-icon" />
        <span className="helpicon-text">Helpfull</span>
      </div>
      <div className="action-item cursor-pointer answer-block ">
        <img src={AnswerIcon} alt="" className="answer-icon" />
        <span className="answericon-text">Answer</span>
      </div>
      <div className="action-item share-icon-block">
        <img src={FbIcon} alt="fb icon" className="help-icon cursor-pointer" />
        <img
          src={TwitterIcon}
          alt="twitter icon"
          className="help-icon cursor-pointer"
        />
        <img
          src={ShareIcon}
          alt="share icon"
          className="help-icon cursor-pointer"
        />
        <img
          src={ShareIcon}
          alt="more icon"
          className="more-icon cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ActionBar;
