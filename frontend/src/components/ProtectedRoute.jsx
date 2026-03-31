import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api";

function ProtectedRoute({ children }) {
  const [auth, setAuth] = useState({ loading: true, isAuthenticated: false });

  useEffect(() => {
    API.get("/auth/me")
      .then((res) => {
        if (res.data && res.data.user) {
          setAuth({ loading: false, isAuthenticated: true });
        } else {
          setAuth({ loading: false, isAuthenticated: false });
        }
      })
      .catch(() => {
        setAuth({ loading: false, isAuthenticated: false });
      });
  }, []);

  if (auth.loading) return <p>Loading...</p>;
  if (!auth.isAuthenticated) return <Navigate to="/login" />;

  return children;
}

export default ProtectedRoute;