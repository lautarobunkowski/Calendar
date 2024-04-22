// import React from 'react'
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleGoogle = async () => {
    const response = await auth.loginWithGoogle();
    if (response.user) {
      navigate("/event_types/user/me");
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
