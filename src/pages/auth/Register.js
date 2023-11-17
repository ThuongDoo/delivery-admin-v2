import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../../services/api";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    name: "",
    password: "",
    role: "vendor",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    name: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await api.post("/auth/register", values).then((res) => {
        console.log(res.data);
      });
      navigate("/login");
    } catch (error) {
      setError(error);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };
  return (
    <div className="login">
      <div>
        <h2>Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <Field type="text" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="formGroup">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div className="formGroup">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <div className="formGroup">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error"
                />
              </div>
              <Link className="forgotPassword" to="/forgot-password">
                Forgot password?
              </Link>
              {error && (
                <div className="error">Invalid email address or password</div>
              )}

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Sign up"}
              </button>
              <Link to="/login">LOG IN</Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
