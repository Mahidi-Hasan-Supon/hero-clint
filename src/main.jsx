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
      Component:Services
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
