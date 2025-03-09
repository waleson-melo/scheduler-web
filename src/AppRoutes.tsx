import { Route, Routes, useNavigate } from "react-router";
import Login from "@/pages/Login";
import SignUP from "@/pages/SignUP";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import { useEffect } from "react";

function AppRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token && window.location.pathname === "/entrar") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/entrar" element={<Login />} />
      <Route path="/cadastrar" element={<SignUP />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
