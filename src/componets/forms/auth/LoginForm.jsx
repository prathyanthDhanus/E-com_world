import React from "react";
import { useFormik } from "formik";

import { loginInitialValues, loginSchema } from "./authSchema";
import CustomInputField from "../../input/CustomInputField";
import CustomButton from "../../buttons/CustomButton";
import { userLogin } from "../../../services/authService";

const LoginForm = () => {
  const { mutate, isPending } = userLogin();
  //Formik validation
  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      mutate(values);
      console.log("Form Submitted with values:", values);
    },
  });

  //Login form fields
  const fields = [
    {
      title: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
    },
    {
      title: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter your password",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto p-6 ">
      <h2 className="text-3xl poppins-bold text-center text-customYellow mx-10">
        Sign In To Your Account
      </h2>
      <form onSubmit={formik.handleSubmit}>
        {fields.map((field) => (
          <CustomInputField
            key={field.name}
            title={field.title}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors[field.name]}
            touched={formik.touched[field.name]}
          />
        ))}
        {/* Submit Button */}
        <div className="mt-4">
          {isPending ? (
            <div>
              <span className="poppins-regular ">Loading</span>
            </div>
          ) : (
            <CustomButton
              buttonText="Login"
              type="submit"
              className="w-full my-5 bg-customYellow text-white poppins-semibold hover:text-customYellow hover:bg-white hover:border-customYellow"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
