import userimg from "../img/userimg.png";
import exclamainimg from "../img/exclamainimg.png";
import "../CSS/Card.css";
import circle from "../img/circle.png";
import todoImg from "../img/todo.png";
import inProgressImg from "../img/inprogress.png";
import cancelledImg from "../img/cancelled.png";
import backlog from "../img/backlog.png";

const Card = ({ ticket }) => {
  // Map status to corresponding image
  const getStatusImage = (status) => {
    switch (status) {
      case "Todo":
        return todoImg;
      case "In progress":
        return inProgressImg;
      case "Backlog":
        return cancelledImg;
      case "done":
        return backlog;
      default:
        return backlog; // You can provide a default image or handle unknown statuses
    }
  };

  return (
    <div className="card">
      <div className="top-heading">
        <h4>{ticket.id}</h4>
        <img src={userimg} alt="User " className="image-card" />
      </div>
      <div className="container-card">
        <img src={getStatusImage(ticket.status)} alt={ticket.status} className="status-img"/>
        <h4>{ticket.title}</h4>
      </div>
      <div className="footer">
        <div className="task-icon">
          <img src={exclamainimg} alt="user-img" className="task-image" />
        </div>
        <div className="task-label">
          <img src={circle} alt="circle-img" className="circle-img" />
          {ticket.tag.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default Card;