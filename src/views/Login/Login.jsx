// import React from 'react'
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleGoogle = async () => {
    try {
      const response = await auth.loginWithGoogle();
      console.log(response)
      if (response.user) {
        console.log("holis")
        const {data} = await axios("/user",{
          name:response.user.displayName,
          email:response.user.email,
          imageUrl: response.user.photoURL
        })
        console.log(data)
        navigate("/event_types/user/me");
      }
    } catch (error) {
      console.log(error.message)
    }
  };

  const handleLogout = () => {
    auth.logout();
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center gap-4">
      <button
        onClick={() => handleGoogle()}
        className="inline py-[10px] px-[18px] bg-[#F8F9FB] text-[#194870] border border-[#F8F9FB] text-lg rounded-lg font-semibold h-fit"
      >
        Iniciar sesión
      </button>
      <button
        onClick={() => handleLogout()}
        className="inline py-[10px] px-[18px] bg-[#F8F9FB] text-[#194870] border border-[#F8F9FB] text-lg rounded-lg font-semibold h-fit"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Login;
