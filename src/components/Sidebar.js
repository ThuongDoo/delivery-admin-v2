import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({ title, navlink, button }) {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <h2>{title}</h2>
        {button && <button onClick={() => navigate("create")}>NEW</button>}
      </div>
      <div className="sidebar-nav">
        {navlink.map((item, index) => (
          <NavLink key={index} to={item.path}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
