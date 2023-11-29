import React from "react";
import axios from "axios";
import { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";
import app from "../../utils/app";

function Login() {
	const { setToken } = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const postLogin = async (e) => {
		e.preventDefault();
		await app
			.post("//localhost:5001/api/v1/auth/login", {
				email,
				password,
			})
			.then((res) => {
				localStorage.setItem("name", res.data.user.name);
				localStorage.setItem("role", res.data.user.role);
				localStorage.setItem("userId", res.data.user.userId);
				
			})
			.catch((err) => console.log(err));
			navigate("/profile");
			console.log("redirecting")
	};

	return (
		<div className="container">
			<div className="formContainer">
				<span className="logo">Privacy Pulse</span>
				<p className="description">
					Welcome to the leading social media page in security and
					account protection
				</p>
				<span className="title">Member Login</span>
				<form method="post" onSubmit={postLogin}>
					<input
						type="email"
						placeholder="email"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="password"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button>Sign in</button>
				</form>
				<p>
					Don't have an account?{" "}
					<Link to={"/register"}>Register here</Link>
				</p>
			</div>
			<img
				src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="#"
			/>
		</div>
	);
}

export default Login;
