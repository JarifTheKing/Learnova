import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import MyProfile from "../Pages/MyProfile";
import AuthLayout from "../Layouts/AuthLayout";
import CourseCard from "../Pages/CourseCard";
import CourseDetails from "../Pages/CourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/skilledData.json"),
      },
      {
        path: "/courseCard",
        element: <CourseCard></CourseCard>,
      },
      {
        path: "/courseDetails",
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
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
]);

export default router;
