import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import List from "../../../components/List";

function Category() {
  const { category } = useLoaderData();
  return (
    <div className="section">
      <List data={category} title={"Category"} />
      <Outlet />
    </div>
  );
}

export default Category;
