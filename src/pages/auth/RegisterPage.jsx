import React from "react";
import { useNavigate } from "react-router-dom";

import RegisterImage from "../../assets/images/bg.png";
import RegisterForm from "../../componets/forms/auth/RegisterForm";
import CustomButton from "../../componets/buttons/CustomButton";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 border-2 rounded-xl border-yellow-300 overflow-hidden">
          {/* Background Image with Text */}
          <div
            className="flex flex-col justify-center items-center bg-cover bg-center text-white p-10  "
            style={{ backgroundImage: `url(${RegisterImage})` }}
          >
            <h1 className="text-4xl poppins-bold mb-4">Welcome Back</h1>
            <p className="text-lg text-center poppins-regular">
            To keep connected with us plase login with your personal info
            </p>
            <CustomButton
              buttonText="SIGN in"
              type="submit"
              className="w-full my-5 px-10 text-white poppins-semibold hover:text-customYellow  hover:border-customYellow"
              onClick={()=>navigate("/login")}
            />
          </div>

          {/* Register Form */}
          <div className="p-6 flex items-center justify-center bg-white">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
