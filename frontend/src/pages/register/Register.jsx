import React from "react";
import { useState } from "react";
import "./register.scss";
import Add from "../../assets/addAvatar.png";
import { Link, useNavigate } from "react-router-dom";
import app from "../../utils/app";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    await app
      .post("//localhost:5001/api/v1/auth/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("name", res.data.user.name);
        localStorage.setItem("role", res.data.user.role);
        localStorage.setItem("userId", res.data.user.userId);
      });
      navigate("../", {replace: true});
      navigate(0)
  };

  return (
    <div className="container">
      <img
        src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="#"
      />
      <div className="formContainer">
        <span className="logo">Privacy Pulse</span>
        <p className="description">
          Welcome to the leading social media page in security and account
          protection
        </p>
        <span className="title">Member Register</span>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="username"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
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
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Register</button>
        </form>
        <p>
          Already have an account? <Link to={"/"}>Sign in here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
