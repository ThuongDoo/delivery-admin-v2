import React, { useEffect } from "react";
import {
  Form,
  Outlet,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";

function Dashboard() {
  const { user, restaurant } = useRouteLoaderData("root");
  console.log(restaurant);
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div>
        <div className="titleBox">
          <h2 className="title">Your Restaurant</h2>
          <button type="button" onClick={() => navigate("/create")}>
            CREATE
          </button>
        </div>
        {restaurant ? (
          restaurant.length === 0 ? (
            <div className="dashboard-content">
              <h2>You don't have any restaurant</h2>
            </div>
          ) : (
            <div className="dashboard-content">
              {restaurant.map((item, index) => (
                <div className="dashboard-content-item" key={index}>
                  <div>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                  </div>
                  <div className="btnBox">
                    <button
                      onClick={() => {
                        navigate(`/update-restaurant/${item._id}`);
                      }}
                    >
                      Update
                    </button>
                    <Form method="delete">
                      <input
                        name="restaurantId"
                        value={item._id}
                        hidden
                        readOnly
                      />
                      <button type="submit">Delete</button>
                    </Form>
                    <button
                      onClick={() => {
                        navigate(`restaurant/${item._id}`);
                      }}
                    >
                      More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="dashboard-content">Loading</div>
        )}
      </div>
      <div>
        <h1>Statistic</h1>
      </div>
    </div>
  );
}

export default Dashboard;
