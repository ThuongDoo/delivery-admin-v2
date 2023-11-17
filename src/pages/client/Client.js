import React, { useEffect } from "react";
import { Outlet, useNavigate, useRouteLoaderData } from "react-router-dom";

function Client() {
  const { user } = useRouteLoaderData("root");
  const navigate = useNavigate();
  useEffect(() => {
    if (user.role === "admin") {
      navigate("/admin");
    } else if (user.role === "user") {
      navigate("/login");
    }
  }, [user]);
  return <Outlet />;
}

export default Client;
