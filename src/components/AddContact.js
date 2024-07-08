import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandatory!");
      return;
    }
    props.addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui container">
      <h2 style={{ marginTop: "50px" }}>Add a Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;

// import React from "react";


// class AddContact extends React.Component {
//     state = {
//         name: "",
//         email:""
//     }
    

//     add = (e) => {
//         e.preventDefault();
//         if (this.state.name === "" || this.state.email ==="") {
//             alert("All fields are mandatory!")
//             return
//         }
//         this.props.addContactHandler(this.state)
//         this.setState({name:"", email:""})
//         this.props.navigate("/")
//     }
//     render() {
//      return(
//         <div className="ui container">
//             <h2 style={{ marginTop: '50px' }}>Add a Contact</h2>

//             <form className="ui form" onSubmit={this.add}>
//                 <div className="field">
//                     <label>Name</label>
//                     <input type="text" placeholder="Name"
//                     value={this.state.name}
//                     onChange={(e) => this.setState({name: e.target.value})}/>
//                 </div>
//                 <div className="field">
//                     <label>Email</label>
//                     <input type="text" placeholder="Email"
//                         value={this.state.email}
//                         onChange={(e) => this.setState({email: e.target.value})}/>
//                 </div>
//                 <button className="ui button blue">Add</button>
//             </form>

//         </div>
//      );
//     }
// }

// export default AddContact;