import React from "react";
import RestaurantForm from "../../../components/RestaurantForm";
import api from "../../../services/api";
import { useNavigate, useRouteLoaderData, useSubmit } from "react-router-dom";

function CreateRestaurant() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { user, category } = useRouteLoaderData("root");
  const haha = useRouteLoaderData("root");
  console.log(haha);
  const data = {
    name: "",
    image: "",
    description: "",
    address: "",
    user: user.userId,
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    try {
      await api.post("restaurant", values);
      navigate(-1, { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      submit(values, { method: "post" });
    }
  };
  return (
    <div>
      <RestaurantForm
        data={data}
        onSubmit={handleSubmit}
        isCreate
        categoryData={category}
      />
    </div>
  );
}

export default CreateRestaurant;
