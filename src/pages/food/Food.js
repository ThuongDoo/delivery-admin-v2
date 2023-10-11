import React from "react";
import {
  Form,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import List from "../../components/List";

function Food() {
  const { food } = useRouteLoaderData("food");
  console.log(food);
  return (
    <div className="section">
      <List data={food} title={"food"} />
      <Outlet />
    </div>
  );
}

export default Food;
