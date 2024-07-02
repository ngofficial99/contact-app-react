import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList"

function App() {
   const contacts = [
    {
      id :"1",
      "name" :"Nishant",
      "email" :"Nishant@email.com"
    },
    {
      id :"2",
      "name" :"Vishal",
      "email" :"vishal@email.com"
    },
    {
      id :"3",
      "name" :"rakesh",
      "email" :"rakesh@email.com"
    }
   ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contact={contacts}/>

    </div>
  );
}

export default App;
