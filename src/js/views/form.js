import React, { useContext, useState, setStore } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Form = () => {
    const { store, actions } = useContext(Context);
   /* const {contacts, setContacts } = useState([]); */
    const [newContact, setNewContact] = useState ({full_name: "",  email: "", address: "", phone: ""})
    

    const submitContact = () => {
      console.log("Helloooooo")
       /*let newId = 0;
       for (let x = 0; x < store.contacts.length; x++){
        if(store.contacts[x].id > newId){
            newId = newContact[x].id;
        }
       }; */
       actions.handleContact(newContact)
      /* console.log(newContact)*/
      
      /* actions.addAContact();*/
        
      }; 
    const test = () => {
      console.log(store.newContact)
    }

   

  return (
    <div className="container"> 
    <h1>Add a new Contact</h1>

    <form>

  <div className="mb-3">
    <label htmlFor="full_name" className="form-label">Full Name</label>
    <input type="Text" className="form-control" id="full_name" value={newContact.full_name} onChange={(e)=> setNewContact({...newContact, full_name: e.target.value})}></input>
    
  </div> 
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="text" className="form-control" id="email" value={newContact.email} onChange={(e)=> setNewContact({...newContact, email: e.target.value})}></input>
   
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="phone" value={newContact.phone} onChange={(e)=> setNewContact({...newContact, phone: e.target.value})}></input>
    
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="Text" className="form-control" id="address" value={newContact.address} onChange={(e)=> setNewContact({...newContact, address: e.target.value})}></input>
    
  </div>
 
  <button onClick={submitContact} className="btn btn-primary" >Submit</button>
  <button onClick={test} className="btn btn-primary" >Test</button>
  <Link to="/">go back to contacts</Link>

</form>
    </div>
 
  )


};