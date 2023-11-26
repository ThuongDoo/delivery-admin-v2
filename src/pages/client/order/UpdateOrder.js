import React from "react";
import {
  useNavigate,
  useParams,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import OrderForm from "../../../components/OrderForm";
import api from "../../../services/api";

function UpdateOrder() {
  const { order } = useRouteLoaderData("order");
  const { orderId } = useParams();
  const navigate = useNavigate();
  const submit = useSubmit();
  const filterOrder = order.filter((item) => item._id === orderId);
  const handleSubmit = async (status) => {
    await api
      .patch(`/order/${filterOrder[0]._id}`, { status: status })
      .then(() => {
        navigate("../", { replace: true });
      })
      .finally(() => {
        submit("", { method: "patch" });
      });
  };

  return (
    <div>
      <OrderForm
        data={filterOrder[0]}
        onSubmit={() => handleSubmit("Completed")}
        onCancel={() => handleSubmit("Cancelled")}
      />
    </div>
  );
}

export default UpdateOrder;
