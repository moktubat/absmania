import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../components/Home/Home/Home";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
      ]
    },
  ]);