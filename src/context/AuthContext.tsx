"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isLoggedin: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const login = () => setIsLoggedin(true);
  const logout = () => setIsLoggedin(false);

  console.log("AuthContext initialized");
  console.log({ isLoggedin, login, logout });

  return (
    <AuthContext.Provider value={{ isLoggedin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};