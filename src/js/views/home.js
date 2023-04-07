import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import "../../styles/home.css";

export const Home = () => {

const {store, actions} = useContext(Context);
const [contacts, setContacts] = useState([{id:1 ,name: "Fred", phone: 123}, {id:2 ,name: "James", phone:345}, {id:3 ,name: "Hanna", phone:456}, {id:4 ,name: "Lisa", phone:567}]);

return(
	<div className="container text-center mt-5">
		<h1>Hello</h1>
		<Link to="/form">
		<button className="btn btn-primary">Add new Contact</button>
         </Link>

	<div className="row g-3 row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
		{contacts.map((item, index)=>{
			return(
                    <Card key={item.id} item={item}/>

			)
		
		})}	
	</div>
		
	</div>
)
};
