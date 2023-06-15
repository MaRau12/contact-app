import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import "../../styles/home.css";

export const Home = () => {

const {store, actions} = useContext(Context);

return(
	<div className="container text-center mt-5">
		<h1>Hello</h1>
		<Link to="/form">
		<button className="btn btn-primary">Add new Contact</button>
         </Link>

	<div className="row g-3 row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
		{store.contacts.map((item, index)=>{
			return(
                    <Card key={item.id} item={item} name={item.full_name}/>

			)
		
		})}	
	</div>
		
	</div>
)
};
