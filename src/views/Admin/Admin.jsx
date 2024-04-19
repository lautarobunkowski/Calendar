import { useState, lazy } from "react";
const Home = lazy(async () => await import("./Home/Home"));
const Login = lazy(async () => await import("./Login/Login"));

const Admin = () => {
  const [user, setUser] = useState(null);
  return <>{user ? <Home /> : <Login />}</>;
};

export default Admin;
