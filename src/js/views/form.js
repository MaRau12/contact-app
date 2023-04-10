import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Form = () => {
    const { store, actions } = useContext(Context);
    const {contacts, setContacts } = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
       let newId = 0;
       for (let x = 0; x < contacts.length; x++){
        if(contacts[x].id > newId){
            newId = contacts[x].id;
        }
       };
       
       let newContact = {id: newId + 1, name: event.target.value, email: event.target.value, phone: event.target.value, address: event.target.value}
       setContacts([...contacts, newContact])
        
      }; 
    
   

  return (
    <div className="container"> 
    <h1>Add a new Contact</h1>

    <form onSubmit={handleSubmit}>

  <div className="mb-3">
    <label for="name" className="form-label">Full Name</label>
    <input type="Text" className="form-control" id="name" value={name}></input>
    
  </div>
  <div className="mb-3">
    <label for="email" className="form-label">Email address</label>
    <input type="text" className="form-control" id="email" value={email} ></input>
   
  </div>
  <div className="mb-3">
    <label for="phone" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="phone" value={phone}></input>
    
  </div>
  <div className="mb-3">
    <label for="address" className="form-label">Address</label>
    <input type="Text" className="form-control" id="address" value={address}></input>
    
  </div>
 
  <button type="submit" className="btn btn-primary" >Submit</button>
  <Link to="/">go back to contacts</Link>

</form>
    </div>
 
  )


};