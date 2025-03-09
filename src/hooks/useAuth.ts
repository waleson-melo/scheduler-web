import { useEffect, useState } from "react";

function useAuth() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("jwt");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  function logout() {
    localStorage.removeItem("jwt");
    setToken(null);
  }

  return { token, logout };
}

export default useAuth;
