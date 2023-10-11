import React, { useEffect } from "react";
import Header from "../components/Header";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
