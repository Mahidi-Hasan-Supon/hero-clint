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
import Loading from "./compunents/Loading.jsx";
import ErrorPage from "./compunents/ErrorPage.jsx";
import UpdateProfile from "./compunents/UpdateProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loading></Loading>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://home-hero-server-olive.vercel.app/latest-home"),
      },
      {
        path: "/home",
        Component: Home,
        loader: () =>
          fetch("https://home-hero-server-olive.vercel.app/latest-home"),
      },
      {
        path: "services",
        Component: Services,
        loader: () =>
          fetch("https://home-hero-server-olive.vercel.app/services"),
      },
      {
        path: "servicesdetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://home-hero-server-olive.vercel.app/servicesdetails/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "myservice",
        element: (
          <PrivateRoute>
            <MyService></MyService>
          </PrivateRoute>
        ),
      },
      {
        path: "addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "mybookings",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        Component: Update,
        loader: ({ params }) =>
          fetch(
            `https://home-hero-server-olive.vercel.app/servicesdetails/${params.id}`
          ),
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "updateprofile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
