import React from "react";
import "./profile.scss";
import Pic from "../../assets/test-profile-pic.jpg";
import app from "../../utils/app";
import { useEffect, useState } from "react";

const Profile = () => {
	const [user, setUser] = useState({});

	const getData = async () => {
		await app
			.get("//localhost:5001/api/v1/users/showMe")
			.then((res) => {
				setUser(res.data.user);
				console.log(user);
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getData();
	}, []);

	const logout = async () => {
		await app.get("//localhost:5001/api/v1/auth/logout");
		window.location.reload(false);
	};

	return (
		<div className="container">
			<div className="profileContainer">
				<div className="profilePic">
					<img src={Pic} alt="profilePicture" />
					<h1>Profile</h1>
				</div>
				<div className="aboutSection">
					<h2>Username: {user.name}</h2>
					<h2>Email : {user.email}</h2>
					<h2>Role: {user.role}</h2>
				</div>
				<div className="logoutButton">
					<button onClick={logout}>Logout</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;
