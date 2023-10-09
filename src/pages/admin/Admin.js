import React, { useEffect } from "react";
import { Outlet, useNavigate, useRouteLoaderData } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function Admin() {
  const { user } = useRouteLoaderData("root");
  const navigate = useNavigate();
  useEffect(() => {
    if (user.role !== "admin") {
      navigate("/");
    }
  }, [user]);
  const sidebar = [
    {
      name: "Users",
      path: "users",
    },
    {
      name: "Feature",
      path: "feature",
    },
    {
      name: "Category",
      path: "category",
    },
  ];
  return (
    <div>
      <Sidebar title={"Menu"} navlink={sidebar} />
      <Outlet />
    </div>
  );
}

export default Admin;
