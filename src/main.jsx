import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Root/Root.jsx";
import Register from "./pages/Register.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import ServicesDetails from "./pages/ServicesDetails.jsx";
import MyBooking from "./pages/MyBooking.jsx";
import AddService from "./pages/AddService.jsx";
import PrivateRoute from "./route/PrivateRoute.jsx";
import MyService from "./pages/MyService.jsx";
import Update from "./compunents/Update.jsx";



const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   children:[
    {
      index:true,
      Component:Home,
       loader:()=>fetch("http://localhost:3000/latest-home")
    },
    {
      path:'/home',
      Component:Home,
      loader:()=>fetch("http://localhost:3000/latest-home")
    },
    {
      path:'services',
      Component:Services,
      loader:()=>fetch("http://localhost:3000/services")
    },
    {
      path:'servicesdetails/:id',
      loader:({params})=>fetch(`http://localhost:3000/servicesdetails/${params.id}`),
      element:<PrivateRoute>
        <ServicesDetails></ServicesDetails>
      </PrivateRoute>,
    },
    {
      path:'myservice',
      element:<PrivateRoute>
        <MyService></MyService>
      </PrivateRoute>,
    },
    {
      path:'addservice',
      element:<PrivateRoute>
        <AddService></AddService>
      </PrivateRoute>,
    },
    {
      path:'mybookings',
      element:<PrivateRoute>
        <MyBooking></MyBooking>
      </PrivateRoute>
    },
    {
      path:'/update/:id',
      Component:Update,
       loader:({params})=>fetch(`http://localhost:3000/servicesdetails/${params.id}`),
    },
    {
      path:'register',
      Component:Register
    },
    {
      path:'login',
      Component:Login
    },
    {
      path:'profile',
      Component:Profile
    },
   ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
