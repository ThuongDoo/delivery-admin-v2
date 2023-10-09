import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
