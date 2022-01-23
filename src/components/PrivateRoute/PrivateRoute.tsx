import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

export const PrivateRoute: FC = ({ children }) => {
  const { isConnected } = useAuth();

  return isConnected ? <>{children}</> : <Navigate to="/" />;
};
