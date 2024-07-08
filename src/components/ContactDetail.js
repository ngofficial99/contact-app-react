import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail = (props) => {
  return (
    <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={user} alt="user" />
            </div>
            <div className="content">
                <div className="header">Nishant</div>
                <div className="description">nishant.g@mactores.in</div>
            </div>

        </div>
    </div>
  );
};

export default ContactDetail;
