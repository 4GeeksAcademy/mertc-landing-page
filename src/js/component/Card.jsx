import React from "react";

 
const Card = ({ title, text, image }) => {
	return (
	  <div className="col-md-3 mb-4">
		<div className="card">
		  <img src={image} className="card-img-top" alt="Placeholder" />
		  <div className="card-body">
			<h5 className="card-title">{title}</h5>
			<p className="card-text">{text}</p>
		  </div>
		</div>
	  </div>
	);
  };
  
export default Card;
