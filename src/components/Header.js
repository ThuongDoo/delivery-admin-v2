import React from "react";
import api from "../services/api";
import "../style.css";
import { Link, useRouteLoaderData } from "react-router-dom";

function Header() {
  const { user } = useRouteLoaderData("root");
  const logout = async () => {
    try {
      await api.get("auth/logout");
      window.location.reload();
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <h2>HOME</h2>
      </Link>
      <div>
        {user && <p>Hello {user.name}</p>}
        <div className="vertical-line"></div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
