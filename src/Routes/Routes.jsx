import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../components/Home/Home/Home";
import About from "../pages/About/About";
import Recipes from "../pages/Recipes/Recipes";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../components/userComponents/Login/Login";
import Register from "../components/userComponents/Register/SignUp";
import Contact from "../pages/Contact/Contact";
import ViewSingleBlog from "../pages/Blogs/ViewSingleBlog";

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
          path: 'recipes',
          element: <Recipes></Recipes>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path: 'blog/:id',
          element: <ViewSingleBlog></ViewSingleBlog>,
          loader: ({params}) => fetch(`http://localhost:5000/blog/${params.id}`)
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
      ]
    },
  ]);