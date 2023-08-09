import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Question from "../Pages/Question/Question";
import Profile from "../Pages/Profile/Profile";
import Contact from "../Pages/Contact/Contact";
import SingIn from "../Form/SingIn/SingIn";
import SingUp from "../Form/SingUp/SingUp";
import DetailsJob from "../DetailsJob/DetailsJob";
import DetailsBlog from "../DetailsBlog/DetailsBlog";
  
export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path:'/alljob',
          element:<About></About>
        },
        {
          path:'/allblogs',
          element:<Question></Question>
        },
        {
          path:'/profile',
          element:<Profile></Profile>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/singin',
          element:<SingIn></SingIn>
        },
        {
          path:'/singup',
          element:<SingUp></SingUp>
        },
        {
          path:'/detailsjob',
          element:<DetailsJob></DetailsJob>
        },
        {
          path:'/detailsblog',
          element:<DetailsBlog></DetailsBlog>
        }

      ]
    },
  ]);