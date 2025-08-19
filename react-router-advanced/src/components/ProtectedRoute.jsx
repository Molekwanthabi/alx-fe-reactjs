import { Navigate } from "react-router-dom";

// Fake auth state for demo
const isAuthenticated = false; // change to true after login

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
