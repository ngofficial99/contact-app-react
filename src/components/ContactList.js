import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
//   const contacts = [
//     {
//       id: "1",
//       name: "Nishant",
//       email: "nishant@gmail.com",
//     },
//   ];

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });
  return (
    <div style={{ marginTop: "60px" }} class="main">
      <h2>
        Contact List
      </h2>
      <Link to="/add">
          <button
            style={{ marginLeft: "900px" }}
            className="ui button blue right">
            Add Contact
          </button>
        </Link>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
