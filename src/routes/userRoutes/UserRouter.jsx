import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import CommonLoader from "../../componets/loader/commonLoader/CommonLoader";
import UserLayout from "../../Layouts/UserLayout";

//Lazy loaded pages
const LandingPage = lazy(() => import("../../pages/LandingPage/LandingPage"));
const LoginPage = lazy(() => import("../../pages/auth/LoginPage"));
const RegisterPage = lazy(() =>
  import("../../pages/auth/RegisterPage")
);

export const userRouter = createBrowserRouter([
  {
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<CommonLoader />}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<CommonLoader />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<CommonLoader />}>
            <RegisterPage />
          </Suspense>
        ),
      },
    ],
  },
]);
