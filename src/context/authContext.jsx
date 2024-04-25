import { auth } from "../firebase/firebase.config";
import { createContext, useContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  // signInWithRedirect,
  onAuthStateChanged,
  // setPersistence,
  // browserSessionPersistence,
} from "firebase/auth";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("error creating auth context");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const suscribed = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        // console.log("no hay usuario suscrito");
        setUser(null);
      } else {
        setUser(currentUser);
      }
    });
    return () => suscribed();
  }, []);

  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };

  const logout = async () => {
    const response = await signOut(auth);
    console.log(response);
  };

  return (
    <authContext.Provider value={{ loginWithGoogle, logout, user}}>
      {children}
    </authContext.Provider>
  );
}
