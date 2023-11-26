import React from "react";
import FormatDate from "./FormatDate";
import api from "../services/api";

function OrderForm({ data = "", onSubmit, onCancel }) {
  console.log(data);

  return (
    <div className="form">
      <div className="form-title order">
        <div>
          <h2>ID: {data._id}</h2>
          <h3>Created at: {FormatDate(data.createdAt)}</h3>
        </div>
        <div>
          <h3>User: {data.user.name}</h3>
          <h3>Status: {data.status}</h3>
        </div>
      </div>
      <div className="order-content">
        {data.items.map((item) => (
          <div key={item._id} className="orderItem">
            <div>
              <img src={item.food.image} alt="food" />
            </div>
            <div>
              <h4>{item.food.name}</h4>
              <h4>quantity: {item.quantity}</h4>
              <h4>price: {item.food.price} vnd</h4>
            </div>
          </div>
        ))}
        <div className="form-btnBox">
          <button onClick={onSubmit} type="button">
            CONFIRM
          </button>
          <button onClick={onCancel} type="button">
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
