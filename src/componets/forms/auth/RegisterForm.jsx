import React from "react";
import { useFormik } from "formik";

import { registerInitialValues, registerSchema } from "./authSchema";
import CustomInputField from "../../input/CustomInputField";
import CustomButton from "../../buttons/CustomButton";
import { userRegister } from "../../../services/authService";


const RegisterForm = () => {
    const { mutate, isPending } = userRegister();
  // Formik validation
  const formik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log("Form Submitted with values:", values);
      mutate(values)
    },
  });

  // Register form fields
  const fields = [
    {
      title: "Username",
      type: "text",
      name: "username",
      placeholder: "Enter your username",
    },
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
      <h2 className="text-xl font-semibold text-gray-700 text-center">
        Register
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
          <CustomButton
            buttonText="Register"
            type="submit"
            className="w-full my-5 bg-customYellow text-white poppins-semibold hover:text-customYellow hover:bg-white hover:border-customYellow"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
