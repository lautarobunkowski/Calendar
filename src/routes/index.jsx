import { Route } from "react-router-dom";
import { lazy } from "react";

export const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    return (
      <Route path={route.path} key={index} element={<route.element />}></Route>
    );
  });
};

export const routes = [
  {
    path: "/",
    element: lazy(async () => await import("../views/Home/Home.jsx")),
  },
  {
    path: "/cortedepelo",
    element: lazy(async () => await import("../views/Calendar/Calendar.jsx")),
  },
  {
    path: "/cortedepelo/schedules",
    element: lazy(
      async () => await import("../views/Appointment/Appointment.jsx")
    ),
  },
  {
    path: "/login",
    element: lazy(async () => await import("../views/Login/Login.jsx")),
  },
  {
    path: "/Admin",
    element: lazy(async () => await import("../views/Admin/Admin.jsx")),
  },
  {
    path: "/*",
    element: lazy(async () => await import("../views/NotFound/NotFound.jsx")),
  },
];
