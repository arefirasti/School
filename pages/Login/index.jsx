import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BeatLoader, ClipLoader } from "react-spinners";

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formFields = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("کد ملی خود را وارد کنید "),
    password: Yup.string().required("رمز عبور الزامی است"),
  });

  const handleSubmit = (value) => {
    setIsSubmitting(true);
    console.log("Stars Submit");
    POST("order/register/", value)
      .then((response) => {
        console.log("we in the process");
        if (!response.ok) {
          throw new Error("مشکلی در سرور رخ داده است");
        }
        return response.json();
      })
      .then(() => {
        console.log("Everything is correct.");
      })
      .catch((error) => {
        console.log("Error is :" + error.message);
      });
    console.log("End of Submit");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">ورود </h1>
        <Formik
          initialValues={formFields}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  کد ملی
                </label>
                <Field
                  name="username"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  رمز عبور
                </label>
                <Field
                  name="password"
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <BeatLoader color="#ffffff" size={9} />
                  ) : (
                    "ورود"
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
