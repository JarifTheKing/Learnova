import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import MyProfile from "../Pages/MyProfile";
import AuthLayout from "../Layouts/AuthLayout";
import CourseCard from "../Pages/CourseCard";
import CourseDetails from "../Pages/CourseDetails";
import PrivateRoute from "../PrivetRouter/PrivetRoute";
import UpdateProfile from "../Pages/UpdateProfile";
import ForgetPass from "../Pages/ForgetPass";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Support from "../Pages/Support";
import AllCourses from "../Pages/AllCourses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const res = await fetch("/skilledData.json");
          return res.json();
        },
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/all-courses",
        element: <AllCourses></AllCourses>,
        loader: async () => {
          const res = await fetch("/skilledData.json");
          return res.json();
        },
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/courseCard",
        element: <CourseCard></CourseCard>,
      },
      {
        path: "/courseDetails/:id",
        element: (
          <PrivateRoute>
            <CourseDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/skilledData.json"),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>,
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/forgetPass",
        element: <ForgetPass></ForgetPass>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
