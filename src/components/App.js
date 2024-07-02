import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList"

function App() {
  const [contacts, setContacts] = useState([])
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contact={contacts}/>

    </div>
  );
}

export default App;
