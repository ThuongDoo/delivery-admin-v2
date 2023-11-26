import React from "react";
import { Outlet, useRouteLoaderData } from "react-router-dom";
import List from "../../../components/List";

function Order() {
  const { order } = useRouteLoaderData("order");
  console.log(order);
  return (
    <div className="section">
      <List
        data={order}
        title={"order"}
        filter={["All", "Completed", "Cancelled", "Pending"]}
      />
      <Outlet />
    </div>
  );
}

export default Order;
