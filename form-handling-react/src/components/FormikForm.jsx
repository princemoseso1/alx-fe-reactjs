import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Formik User Registration</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Formik Form submitted:", values);
          alert("User registered successfully!");
        }}
      >
        <Form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <Field name="username" className="w-full border rounded-lg p-2 mt-1" />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <Field name="email" type="email" className="w-full border rounded-lg p-2 mt-1" />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <Field name="password" type="password" className="w-full border rounded-lg p-2 mt-1" />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
