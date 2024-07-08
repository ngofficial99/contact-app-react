import React from "react";
import { useLocation } from "react-router-dom";
import user from "../images/user.jpg";
import { Link } from "react-router-dom";

const ContactDetail = () => {
  const location = useLocation();
  const { name, email } = location.state.contact;

  return (
    <div style={{ padding: "60px" }} className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
        <button style={{ display: "block", margin: "0 auto" }} className="ui button blue">Back to contact list</button>
        </Link>
      
      </div>
    </div>
  );
};

export default ContactDetail;
