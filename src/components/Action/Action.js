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
      <div className="action-item">
        <img src={AnswerIcon} alt="" className="help-icon" />
        <span className="helpicon-text">Answer</span>
      </div>
      <div className="action-item">
        <img src={FbIcon} alt="fb icon" className="help-icon" />
        <img src={TwitterIcon} alt="twitter icon" className="help-icon" />
        <img src={ShareIcon} alt="share icon" className="help-icon" />
      </div>
    </div>
  );
};

export default ActionBar;
