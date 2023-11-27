import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function RestaurantForm({ data = "", onSubmit, isCreate, categoryData }) {
  const initialValues = {
    name: data.name,
    image: data.image,
    description: data.description,
    avarageRating: data.avarageRating,
    numOfReviews: data.numOfReviews,
    foods: data.foods,
    address: data.address,
    user: data.user,
    category: data.category ? data.category[0] : "",
  };
  console.log(data);
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .max(50, "Name must be at most 50 characters long"),
    image: Yup.string().required("Image is required"),
    description: Yup.string()
      .required("Description is required")
      .max(200, "Description must be at most 200 characters long"),
    category: Yup.string().required("no category"),
  });
  console.log(categoryData);
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting }) => (
        <Form className="form restaurant">
          <div className="form-title">
            <h2>{values.name}</h2>
          </div>
          <div className="form-content">
            <img src={values.image} alt={values.name} />
            <div>
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
                <label htmlFor="address">Address</label>
                <Field type="text" name="address"></Field>
              </div>
              <div className="category">
                <label htmlFor="category">Category</label>
                <div>
                  <img
                    src={
                      categoryData.find(
                        (item) => item._id.toString() === values.category
                      )?.image
                    }
                    alt={"no img"}
                  />
                  <Field as="select" name="category">
                    <option value="" disabled>
                      select
                    </option>
                    {categoryData?.map((item) => (
                      <option value={item._id} key={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </Field>
                </div>
                <ErrorMessage
                  className="error"
                  name="category"
                  component="div"
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <Field as="textarea" name="description"></Field>
                <ErrorMessage
                  className="error"
                  name="description"
                  component="div"
                />
              </div>
              <div className="form-btnBox">
                <button disabled={isSubmitting} type="submit">
                  {isCreate ? "Create" : "Update"}
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default RestaurantForm;
