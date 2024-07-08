import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img
        style={{ marginTop: "10px" }}
        className="ui avatar image"
        src={user}
        alt="user"
      />
      <div className="content">
      <Link
          to={`/contact/${id}`}
          state={{ contact: props.contact }}
        >
          <div className="header">{name}</div>
          <div style={{ marginTop: "10px" }}>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", paddingLeft: "1100px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
