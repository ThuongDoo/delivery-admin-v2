import React from "react";
import {
  useNavigate,
  useParams,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import FoodForm from "../../../components/FoodForm";
import api from "../../../services/api";

function CreateFood() {
  const { category } = useRouteLoaderData("food");
  const { restaurantId } = useParams();
  const submit = useSubmit();
  const data = {
    restaurant: restaurantId,
  };
  const handleSubmit = async (values) => {
    try {
      await api.post("food", values);
    } catch (error) {
      console.log(error);
    } finally {
      submit("", { method: "post" });
    }
  };
  return (
    <div>
      <FoodForm
        data={data}
        onSubmit={handleSubmit}
        isCreate
        categoryData={category}
      />
    </div>
  );
}

export default CreateFood;
