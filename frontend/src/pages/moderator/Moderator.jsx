import React from "react";
import app from "../../utils/app";
import UserComponent from "../../components/userComponent";
import "./moderator.scss";
import { useEffect, useState } from "react";

function Moderator() {
  var arr = []
  const [users, setUsers] = useState({});

  const getUsers = async () => {
		await app
			.get("//localhost:5001/api/v1/users")
			.then((res) => {
        Object.keys(res.data.users).forEach(key => arr.push(res.data.users[key]))
        arr.map(user => console.log(user))

			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getUsers();
	}, []);

	const logout = async () => {
		await app.get("//localhost:5001/api/v1/auth/logout");
		window.location.reload(false);
	};

	return (
		<div className="container">
			<div className="topContainer">
				<h1>Moderator Page</h1>
					<button onClick={logout}>Logout</button>
			</div>
			<div className="userCards">
        {arr.map(user => <h1>User</h1>)}
			</div>
		</div>
	);
}

export default Moderator;
