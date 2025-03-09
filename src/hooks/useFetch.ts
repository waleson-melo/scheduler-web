import api from "@/services/api";
import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    api
      .get(url)
      .then((response) => setData(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

// exemplo de como acessar usando o token de autenticação
// const token = localStorage.getItem("jwt");

// const response = await fetch("http://localhost:5000/api/protected", {
//     method: "GET",
//     headers: {
//         Authorization: `Bearer ${token}`,
//     },
// });
