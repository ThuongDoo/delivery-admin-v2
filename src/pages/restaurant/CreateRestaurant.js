import React from "react";
import RestaurantForm from "../../components/RestaurantForm";
import api from "../../services/api";
import { useNavigate, useRouteLoaderData, useSubmit } from "react-router-dom";

function CreateRestaurant() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { user } = useRouteLoaderData("root");
  const data = {
    name: "",
    image: "",
    description: "",
    address: "",
    user: user.userId,
  };

  const handleSubmit = async (values, { setSubmitting }) => {
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
      <RestaurantForm data={data} onSubmit={handleSubmit} isCreate />
    </div>
  );
}

export default CreateRestaurant;
