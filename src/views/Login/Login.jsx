// import React from 'react'
import { useAuth } from "../../context/authContext";

const Login = () => {
  const auth = useAuth()

  const handleGoogle = async() => {
    const response = await auth.loginWithGoogle()
    console.log(response)
  }
  return <div className="min-h-screen w-full flex items-center justify-center gap-4">
      <button onClick={() => handleGoogle()} className="inline py-[10px] px-[18px] bg-[#F8F9FB] text-[#194870] border border-[#F8F9FB] text-lg rounded-lg font-semibold h-fit">Iniciar sesión</button>
      <button onClick={() => auth.logout()} className="inline py-[10px] px-[18px] bg-[#F8F9FB] text-[#194870] border border-[#F8F9FB] text-lg rounded-lg font-semibold h-fit">Cerrar sesión</button>
  </div>;
};

export default Login;
