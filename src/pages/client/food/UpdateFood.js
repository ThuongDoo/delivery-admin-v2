import React from "react";
import {
  useNavigate,
  useParams,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import FoodForm from "../../../components/FoodForm";
import api from "../../../services/api";

function UpdateFood() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { food, category } = useRouteLoaderData("food");
  console.log(category);
  const { foodId } = useParams();
  const filterFood = food.filter((item) => item._id === foodId);
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values);
      await api.patch(`food/${foodId}`, values);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      submit("", { method: "patch" });
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`food/${foodId}`);
      navigate("../", { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      submit("", { method: "delete" });
    }
  };
  return (
    <div>
      <FoodForm
        data={filterFood[0]}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        categoryData={category}
      />
    </div>
  );
}

export default UpdateFood;
