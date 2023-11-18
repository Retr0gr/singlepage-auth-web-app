import React from "react";
import "./profile.scss";
import Pic from "../../assets/test-profile-pic.jpg"

function Profile() {
  return (
    <div className="container">
      <div className="profileContainer">
        <div className="profilePic">
          <img src={Pic} alt="profilePicture" />
          <h1>Username</h1>
        </div>
        <div className="aboutSection">
          <h2>Username: </h2>
          <h2>Email : </h2>
          <h2>Password: ********</h2>
        </div>
        <div className="logoutButton">
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
