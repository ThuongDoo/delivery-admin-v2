import React from "react";
import CategoryForm from "../../../components/CategoryForm";
import api from "../../../services/api";
import { useSubmit } from "react-router-dom";

function CreateCategory() {
  const submit = useSubmit();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await api.post("category", values);
    } catch (error) {
      console.log(error);
    } finally {
      submit("", { method: "post" });
    }
  };
  return (
    <div>
      <CategoryForm onSubmit={handleSubmit} isCreate />
    </div>
  );
}

export default CreateCategory;
