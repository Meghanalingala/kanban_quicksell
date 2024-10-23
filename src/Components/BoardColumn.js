import React from "react";
import Card from "./Card";
import "../CSS/BoardColumn.css";
import backlogImage from "../img/backlog.png";
import plus from "../img/plus.png";
import dots from "../img/dots.png";
import todo from "../img/todo.png";
import userImage from "../img/userimg.png";
import inProgressImg from "../img/dots.png";
import highImage from "../img/high.png";
import lowImage from "../img/low.png";
import noPriorityImage from "../img/dots.png";
import mediumImage from "../img/medium.png";
import urgentImg from "../img/urgent.jpg";

const imageMapping = {
  backlog: backlogImage,
  todo: todo,
  user: userImage,
  priorityName: dots,
  inprogress: inProgressImg,
  high: highImage,
  medium: mediumImage,
  low: lowImage,
  urgent: urgentImg,
  nopriority: noPriorityImage,
};

const BoardColumn = ({ group }) => {
  const groupKey = group.key.toLowerCase();
  const imageSrc = imageMapping[groupKey.split(" ").join("")] || userImage; // Default to empty string if no image is found

  return (
    <div className="board-column">
      <div className="complete-heading">
        <div className="heading">
          <img
            src={imageSrc}
            alt={`${group.key}`}
            className={`imgage1 ${
              imageSrc === userImage ? "circular-image" : ""
            }`}
          />
          <h5>
            {group.key} <span className="head-x">{group.tickets.length}{" "}</span>
          </h5>
        </div>
        <div className="right-section">
          <img src={plus} alt="plus-sign" className="imgage2" />
          <img src={dots} alt="dots" className="imgage2" />
        </div>
      </div>
      {group.tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default BoardColumn;