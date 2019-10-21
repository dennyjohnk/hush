import React from "react";
import "./Tag.css";

const Tag = props => {
  const tags = props.tags;
  return (
    <div>
      {tags.splice(0, 3).map((tag, index) => {
        return (
          <span className="tag" key={index}>
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default Tag;
