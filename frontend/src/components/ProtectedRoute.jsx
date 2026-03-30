import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api";

function ProtectedRoute({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    API.get("/auth/me")
      .then(() => setAuth(true))
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) return <p>Loading...</p>;
  if (!auth) return <Navigate to="/login" />;

  return children;
}

export default ProtectedRoute;