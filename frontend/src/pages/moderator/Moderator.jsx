import React from "react";
import app from "../../utils/app";
import useUserInfo from "../../utils/useUserInfo";
import UserComponent from "../../components/userComponent";
import "./moderator.scss";

function Moderator() {
  const { users } = useUserInfo();

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
      <div className="bottomContainer">
        {users?.map((user) => {
          //console.log(user);
          return <UserComponent data={user} />;
        })}
      </div>
    </div>
  );
}

export default Moderator;
