import React from 'react'
import app from "../../utils/app"
import "./admin.scss"
import UserComponent from '../../components/userComponent';
import { useEffect, useState } from "react";


function Admin() {
  const [users, setUsers] = useState({});

  const getUsers = async () => {
		await app
			.get("//localhost:5001/api/v1/users")
			.then((res) => {
        setUsers(res.data.users)
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
				<h1>Admin Page</h1>
					<button onClick={logout}>Logout</button>
			</div>
			<div className="userCards">
        <UserComponent data={users[0]}/>
			</div>
		</div>
  )
}

export default Admin