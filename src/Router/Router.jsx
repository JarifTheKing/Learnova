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
        path: "/",
        element: <Home />,
        loader: async () => {
          const res = await fetch("/skilledData.json");
          return res.json();
        },
      },
      {
        path: "/courseCard",
        element: <CourseCard></CourseCard>,
      },
      {
        path: "/courseDetails/:id",
        element: <CourseDetails></CourseDetails>,
        loader: () => fetch("/skilledData.json"),
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
