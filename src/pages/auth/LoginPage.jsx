import React from "react";
import { useNavigate } from "react-router-dom";

import LoginImage from "../../assets/images/bg.png";
import LoginForm from "../../componets/forms/auth/LoginForm";
import CustomButton from "../../componets/buttons/CustomButton";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 border-2 rounded-xl border-yellow-300 overflow-hidden">
          {/* Login Form */}
          <div className="p-6 flex items-center justify-center bg-white">
            <LoginForm />
          </div>

          {/* Background Image with Text */}
          <div
            className="flex flex-col justify-center items-center bg-cover bg-center text-white p-10  "
            style={{ backgroundImage: `url(${LoginImage})` }}
          >
            <h1 className="text-4xl poppins-bold mb-4">Hello Friend!</h1>
            <p className="text-lg text-center poppins-regular">
              Enter your personal details and start your journey with us
            </p>
            <CustomButton
              buttonText="SIGN up"
              type="submit"
              className="w-full my-5 px-10 text-white poppins-semibold hover:text-customYellow  hover:border-customYellow"
              onClick={()=>navigate("/register")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
