import React from "react";
import { useParams, useRouteLoaderData, useSubmit } from "react-router-dom";
import FeatureForm from "../../../components/FeatureForm";
import api from "../../../services/api";

function UpdateFeature() {
  const { feature, restaurant } = useRouteLoaderData("feature");
  const submit = useSubmit();
  const { featureId } = useParams();
  const filterFeature = feature.filter((item) => item._id === featureId);
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await api.patch(`feature/${featureId}`, values);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      submit("", { method: "patch" });
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`feature/${featureId}`);
    } catch (error) {
      console.log(error);
    } finally {
      submit("", { method: "post" });
    }
  };
  return (
    <div>
      <FeatureForm
        data={filterFeature[0]}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        restaurantData={restaurant}
      />
    </div>
  );
}

export default UpdateFeature;
