import React from "react";
import "./userComponents.scss";

function userComponent(data) {
	console.log(data.data.email);
	return (
		<div className="userContainer">
			<h2>Email: {data.data.email}</h2>
			<h2>Id:</h2>
		</div>
	);
}

export default userComponent;
