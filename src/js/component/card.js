import React from "react";
import { Link } from "react-router-dom";


export const Card = ({item}) => {

   
    return (         
                   <div className="row-cols-2">
                    <div key={item.id} className="card" style={{width: "18rem"}}>
                      <img src="..." className="card-img-top" alt=":)"/>
                      <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">Phone Number: {item.phone} </p>
                          <Link to="/form">
				                  	<button className="btn btn-primary">Edit</button>
                          </Link>
                          
                          <Link >
				                  	<button className="btn btn-primary">Delete</button>
                          </Link>
                         
                      </div>
                    </div>
    
            </div>
    )
    };