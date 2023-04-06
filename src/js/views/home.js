import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import "../../styles/home.css";

export const Home = () => {

const {store, actions} = useContext(Context);
const [contacts, setContacts] = useState([{id:1 ,name: "Fred", phone: 123}, {id:2 ,name: "James", phone:345}, {id:3 ,name: "Hanna", phone:456}, {id:4 ,name: "Lisa", phone:567}]);

return(
	<div className="text-center mt-5">
		<h1>Hello</h1>
		{contacts.map((item, index)=>{
			return(
                    <Card item={item}/>

			)
		
		})}	
		
	</div>
)
};
