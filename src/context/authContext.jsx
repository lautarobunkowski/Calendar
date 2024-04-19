import { auth } from "../firebase/firebase.config";
import { createContext, useContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("error creating auth context");
  }
  return context;
};

export function AuthProvider({ children }) {
  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };

  const logout = async () => {
    const response = await signOut();
    console.log(response);
  };

  return (
    <authContext.Provider value={{ loginWithGoogle, logout }}>
      {children}
    </authContext.Provider>
  );
}
