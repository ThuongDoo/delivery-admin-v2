import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({ title, navlink, button, filter, onFilterChange }) {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <h2>{title}</h2>
        {button && <button onClick={() => navigate("create")}>NEW</button>}
        {filter && (
          <select
            onChange={(event) => {
              const selectedValue = event.target.value;
              console.log(selectedValue);
              onFilterChange(selectedValue);
            }}
          >
            {filter.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="sidebar-nav">
        {navlink != "" ? (
          navlink.map((item, index) => (
            <NavLink key={index} to={item.path}>
              {item.name}
            </NavLink>
          ))
        ) : (
          <h3>You don't have any {title}</h3>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
