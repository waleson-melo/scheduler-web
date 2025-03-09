import useAuth from "@/hooks/useAuth";
import { JSX } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/entrar" replace />;
  }

  return children;
};

export default ProtectedRoute;
