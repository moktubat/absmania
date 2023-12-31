import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../components/Home/Home/Home";
import About from "../pages/About/About";
import Workouts from "../pages/Workouts/Workouts";
import SingleWorkout from "../pages/Workouts/SingleWorkout";
import Recipes from "../pages/Recipes/Recipes";
import Store from "../pages/Store/Store";
import Blogs from "../pages/Blogs/Blogs";
import ViewSingleBlog from "../pages/Blogs/ViewSingleBlog";
import Contact from "../pages/Contact/Contact";
import Login from "../components/userComponents/Login/Login";
import Register from "../components/userComponents/Register/SignUp";

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
          path: 'workouts',
          element: <Workouts></Workouts>
        },
        {
          path: 'workout/:id',
          element: <SingleWorkout></SingleWorkout>,
          loader: ({params}) => fetch(`http://localhost:5000/workout/${params.id}`)
        },
        {
          path: 'recipes',
          element: <Recipes></Recipes>
        },
        {
          path: 'store',
          element: <Store></Store>
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