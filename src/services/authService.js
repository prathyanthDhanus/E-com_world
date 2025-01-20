import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import Axios from "../axios/apiClient";
import {
  showSuccessToast,
  showErrorToast,
} from "../utils/toastNotification/Toast";

//================== user login service ===================
export const userLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (values) => {
      const response = await Axios.post("/api/user/login", values);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data?.data?.accessToken);
      localStorage.setItem("refreshToken", data?.data?.refreshToken);
      showSuccessToast(data?.message);
      navigate("/");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Login failed. Try again."
      );
    },
  });
};

//================== user register service ===================
export const userRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (values) => {
      const response = await Axios.post("/api/user/register", values);
      return response.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
      navigate("/login");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Registration failed. Try again."
      );
    },
  });
};
