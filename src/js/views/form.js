import React, { useContext, useState, setStore } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Form = () => {
    const { store, actions } = useContext(Context);
   /* const {contacts, setContacts } = useState([]); */
    const [newContact, setNewContact] = useState ({full_name: "",  email: "", address: "", phone: ""})
    console.log(newContact)
    const handleContact = () => {

      /* let newId = 0;
       for (let x = 0; x < store.contacts.length; x++){
        if(store.contacts[x].id > newId){
            newId = newContact[x].id;
        }
       }; */
       console.log(newContact)
       setStore({addThisContact: newContact})
       console.log(store.addThisContact)
        
      }; 
    
   

  return (
    <div className="container"> 
    <h1>Add a new Contact</h1>

    <form>

  <div className="mb-3">
    <label for="full_name" className="form-label">Full Name</label>
    <input type="Text" className="form-control" id="full_name" value={newContact.full_name} onChange={(e)=> setNewContact({...newContact, full_name: e.target.value})}></input>
    
  </div> 
  <div className="mb-3">
    <label for="email" className="form-label">Email address</label>
    <input type="text" className="form-control" id="email" value={newContact.email} onChange={(e)=> setNewContact({...newContact, email: e.target.value})}></input>
   
  </div>
  <div className="mb-3">
    <label for="phone" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="phone" value={newContact.phone} onChange={(e)=> setNewContact({...newContact, phone: e.target.value})}></input>
    
  </div>
  <div className="mb-3">
    <label for="address" className="form-label">Address</label>
    <input type="Text" className="form-control" id="address" value={newContact.address} onChange={(e)=> setNewContact({...newContact, address: e.target.value})}></input>
    
  </div>
 
  <button onClick={handleContact()} className="btn btn-primary" >Submit</button>
  <Link to="/">go back to contacts</Link>

</form>
    </div>
 
  )


};