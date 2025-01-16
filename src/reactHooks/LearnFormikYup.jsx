import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const LearnFormikYup = () => {
  return (
    <div>
      <h1>Formik & Yup Example</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email("Invalid email").required("Email is required"),
          name: Yup.string()
            .required("Name is required")
            .min(2, "Name is too short")
            .max(20, "Name is too long"),
          password: Yup.string()
            .required("Password is required")
            .matches(
              /^.*(?=.{10,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
              "Password must be at least 10 characters long and include one uppercase letter, one lowercase letter, one digit, and one special character"
            ),
          confirmPassword: Yup.string()
            .required("Please confirm your password")
            .oneOf([Yup.ref("password")], "Passwords must match"),
        })}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name ? "input-error" : "input"
                }
              />
              {errors.name && touched.name && (
                <div className="error-message">{errors.name}</div>
              )}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email ? "input-error" : "input"
                }
              />
              {errors.email && touched.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "input-error" : "input"
                }
              />
              {errors.password && touched.password && (
                <div className="error-message">{errors.password}</div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "input-error"
                    : "input"
                }
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div className="error-message">{errors.confirmPassword}</div>
              )}
            </div>

            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <button type="button" onClick={handleReset} disabled={isSubmitting}>
                Reset
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LearnFormikYup;
