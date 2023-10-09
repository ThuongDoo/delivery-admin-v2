import { ErrorMessage, Field, Formik, Form, FieldArray } from "formik";
import React from "react";
import * as Yup from "yup";
import Items from "./Items";

function FeatureForm({
  data = "",
  onSubmit,
  isCreate,
  onDelete,
  restaurantData,
}) {
  const initialValues = {
    name: data.name,
    image: data.image,
    description: data.description,
    restaurant: data.restaurant,
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
            <div>
              <label htmlFor="restaurant">Restaurant</label>
              <FieldArray
                name="restaurant"
                render={(arrayHelpers) => (
                  <div className="items">
                    {values.restaurant.length > 0 &&
                      values.restaurant.map((item, index) => (
                        <div key={index} className="item">
                          <div>
                            <img src={item.image} alt={item.name} />
                            <Field name={`restaurant.${index}`} as="select">
                              {restaurantData.map((option, index) => (
                                <option value={option._id}>
                                  {option.name}
                                </option>
                              ))}
                            </Field>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="item-button"
                              onClick={() => {
                                arrayHelpers.remove(index);
                              }}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button
                      className="items-button"
                      type="button"
                      onClick={() => arrayHelpers.push({ name: "", image: "" })}
                    >
                      Add Restaurant
                    </button>
                  </div>
                )}
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

export default FeatureForm;
