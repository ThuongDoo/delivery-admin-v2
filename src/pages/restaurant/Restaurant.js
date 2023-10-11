import React from "react";
import { Outlet, useParams, useRouteLoaderData } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function Restaurant() {
  const { restaurantId } = useParams();
  const { restaurant } = useRouteLoaderData("root");
  const fileredRestaurant = restaurant.filter(
    (item) => item._id === restaurantId
  );

  const data = [
    {
      path: "food",
      name: "Food",
    },
    {
      path: "order",
      name: "Order",
    },
  ];
  return (
    <div>
      <Sidebar title={fileredRestaurant[0].name} navlink={data} />
      <Outlet />
    </div>
  );
}

export default Restaurant;
