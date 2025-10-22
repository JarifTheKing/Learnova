import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Log In
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Register
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LogOut
  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("You Log Out Now!");
        // console.log();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // State Change
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribed();
    };
  }, []);

  const authData = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    register,
    logOut,
  };

  return (
    <div>
      <AuthContext value={authData}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
