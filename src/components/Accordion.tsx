import React from "react";
import { AccordionProps } from "../types";
import "./accordion.css";

const Accordion: React.FC<AccordionProps> = ({
  avatarImage,
  avatarName,
  post,
  groupName,
  comment,
  message,
  reactionTime,
  postImage,
  isOnline,
}) => {
  return (
    <div
      className="accordion"
      style={
        comment
          ? { backgroundColor: "hsl(0, 0%, 100%)" }
          : { backgroundColor: "hsl(210, 60%, 98%)" }
      }
    >
      <div className="accordion-main-content">
        <div className="avatarImage-container">
          <img src={avatarImage} alt={avatarImage} />
        </div>
        <div className="post-container">
          <div className="post-text-container">
          <p>
            <span className="avatar-name">{avatarName}</span>
            {message} <span className="avatar-post">{post}</span>{" "}
            <span className="group-name">{groupName}</span>
            {isOnline && <span className="red-dot"></span>}
            <br />
            <span className="time">{reactionTime}</span>
         
          </p>
          {postImage && (
            <div className="post-picture-container">
              <img src={postImage} alt={postImage} />
            </div>
          )}
          </div>
      {comment && (
        <textarea name="" id="" className="comment" value={comment} />
      )}
        </div>
      </div>

    </div>
  );
};

export default Accordion;
