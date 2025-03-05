import { BrowserRouter, Route, Routes } from "react-router";
import Login from "@/pages/Login";
import SignUP from "@/pages/SignUP";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="entrar" element={<Login />} />
        <Route path="cadastrar" element={<SignUP />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
