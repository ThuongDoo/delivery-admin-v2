import React, { useEffect } from "react";
import Header from "../components/Header";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

function Root() {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.role === "admin") {
      navigate("/admin");
    }
  }, [user]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
