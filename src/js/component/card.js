import React from "react";


export const Card = ({item}) => {

   
    return (         
                
                    <div key={item.id} className="card" style={{width: "18rem"}}>
                      <img src="..." className="card-img-top" alt=":)"/>
                      <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">Phone Number: {item.phone} </p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
    
            
    )
    };