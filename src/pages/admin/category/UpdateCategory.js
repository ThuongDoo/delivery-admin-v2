import React from "react";
import { useParams, useRouteLoaderData, useSubmit } from "react-router-dom";
import CategoryForm from "../../../components/CategoryForm";
import api from "../../../services/api";

function UpdateCategory() {
  const { category } = useRouteLoaderData("category");
  const submit = useSubmit();
  const { categoryId } = useParams();
  const fileredCategory = category.filter((item) => item._id === categoryId);
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await api.patch(`category/${categoryId}`, values);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      submit("", { method: "post" });
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`category/${categoryId}`);
    } catch (error) {
      console.log(error);
    } finally {
      submit("", { method: "post" });
    }
  };
  return (
    <div>
      <CategoryForm
        data={fileredCategory[0]}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default UpdateCategory;
