import React from "react";
import api from "../../../services/api";
import { useRouteLoaderData, useSubmit } from "react-router-dom";
import FeatureForm from "../../../components/FeatureForm";

function CreateFeature() {
  const { restaurant } = useRouteLoaderData("feature");
  const submit = useSubmit();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await api.post("feature", values);
    } catch (error) {
      console.log(error);
    } finally {
      submit("", { method: "post" });
    }
  };
  return (
    <div>
      <FeatureForm
        onSubmit={handleSubmit}
        isCreate
        restaurantData={restaurant}
      />
    </div>
  );
}

export default CreateFeature;
