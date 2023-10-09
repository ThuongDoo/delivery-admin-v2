import React, { useEffect } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

function Dashboard() {
  const { user } = useRouteLoaderData("root");
  const navigate = useNavigate();
  useEffect(() => {
    if (user.role === "admin") {
      navigate("/admin");
    }
  }, [user]);

  return <div>Dashboard</div>;
}

export default Dashboard;
