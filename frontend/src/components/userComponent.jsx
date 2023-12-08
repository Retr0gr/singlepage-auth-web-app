import React from "react";
import "./userComponents.scss";

function userComponent(data) {
	return (
		<div className="userContainer">
			<h2>Email: {data.data.email}</h2>
			<h2>Id: {data.data._id}</h2>
		</div>
	);
}

export default userComponent;
