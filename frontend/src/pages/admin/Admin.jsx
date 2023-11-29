import React from 'react'
import app from "../../utils/app"

function Admin() {

  const logout = async () => {
		await app.get("//localhost:5001/api/v1/auth/logout");
		window.location.reload(false);
	};

  return (
    <div>
      <h1>Admin Page</h1>
      <div className="logoutButton">
					<button onClick={logout}>Logout</button>
				</div>
    </div>
  )
}

export default Admin