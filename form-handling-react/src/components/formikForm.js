// src/components/formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Formik Registration</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string().required("Username is required"),
          email: Yup.string().email("Invalid email").required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log("Formik values:", values);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div className="mb-3">
              <label className="block mb-1">Username</label>
              <Field name="username" className="w-full border px-2 py-1 rounded" />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-3">
              <label className="block mb-1">Email</label>
              <Field
                name="email"
                type="email"
                className="w-full border px-2 py-1 rounded"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-3">
              <label className="block mb-1">Password</label>
              <Field
                name="password"
                type="password"
                className="w-full border px-2 py-1 rounded"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
