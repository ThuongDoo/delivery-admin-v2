import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

function CategoryForm({ data = "", onSubmit, isCreate, onDelete }) {
  console.log(data);
  const initialValues = {
    name: data.name,
    image: data.image,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .max(50, "Name must be at most 50 characters long"),
    image: Yup.string().required("Image is required"),
  });
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting }) => (
        <Form className="form">
          <div className="form-title">
            <h2>{values.name}</h2>
          </div>
          <div className="form-content">
            <img src={values.image} alt={values.name} />
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name"></Field>
              <ErrorMessage className="error" name="name" component="div" />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <Field type="text" name="image"></Field>
              <ErrorMessage className="error" name="image" component="div" />
            </div>
            {isCreate ? (
              <div className="form-btnBox">
                <button disabled={isSubmitting} type="submit">
                  {isSubmitting ? "Creating" : "Create"}
                </button>
              </div>
            ) : (
              <div className="form-btnBox">
                <button disabled={isSubmitting} type="submit">
                  {isSubmitting ? "Updating" : "Update"}
                </button>
                <button
                  disabled={isSubmitting}
                  type="button"
                  onClick={onDelete}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CategoryForm;
