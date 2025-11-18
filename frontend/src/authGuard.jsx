import { Navigate } from "react-router-dom";

export default function AuthGuard({ children }) {
  const logged = localStorage.getItem("trapdoor_token");

  if (!logged) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
