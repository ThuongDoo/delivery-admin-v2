import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import List from "../../../components/List";

function Feature() {
  console.log("feature");
  const { feature } = useLoaderData();
  return (
    <div className="section">
      <List data={feature} title={"Feature"} />
      <Outlet />
    </div>
  );
}

export default Feature;
