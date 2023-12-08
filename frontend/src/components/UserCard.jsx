import React from "react";
import "./userCard.scss";
import app from "../utils/app";

function UserCard(data) {
  const deleteUser = async (e) => {
    e.preventDefault();
    await app
      .delete(`//localhost:5001/api/v1/users/deleteUser/${data.data._id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {});
  };

  return (
    <div className="userCardContainer">
      <h2>Email: {data.data.email}</h2>
      <h2>Id: {data.data._id}</h2>
      <button onClick={deleteUser}>Delete User</button>
    </div>
  );
}

export default UserCard;
