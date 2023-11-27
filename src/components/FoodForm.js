import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

function FoodForm({ data, onSubmit, isCreate, onDelete, categoryData }) {
  console.log(data);
  const initialValues = {
    name: data.name || "",
    image: data.image || "",
    description: data.description || "",
    price: data.price || "",
    restaurant: data.restaurant || "",
    discountPercentage: data.discountPercentage || "",
    // category: data.category || "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .max(50, "Name must be at most 50 characters long"),
    image: Yup.string().required("Image is required"),
    description: Yup.string()
      .required("Description is required")
      .max(200, "Description must be at most 200 characters long"),
    price: Yup.number().required("Price is required"),
  });
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting }) => (
        <Form className="form food">
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
            <div>
              <label htmlFor="price">Price</label>
              <Field type="text" name="price"></Field>
              <ErrorMessage className="error" name="price" component="div" />
            </div>
            <div>
              <label htmlFor="discountPercentage">Discount Percentage</label>
              <Field type="text" name="discountPercentage"></Field>
            </div>
            {/* <div className="category">
              <label htmlFor="category">Category</label>
              <div>
                <img src={values.category.image} alt={values.category.image} />
                <Field as="select" name="category._id">
                  {categoryData?.map((item) => (
                    <option value={item._id} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Field>
              </div>
            </div> */}
            <div>
              <label htmlFor="description">Description</label>
              <Field as="textarea" name="description"></Field>
              <ErrorMessage
                className="error"
                name="description"
                component="div"
              />
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

export default FoodForm;
