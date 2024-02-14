import React, { ReactNode } from "react";
import { useAuth } from "@contexts/AuthContext";

import Loading from "./Loading";

interface ProtectedPageProps {
  children: ReactNode;
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <div>Redirection...</div>; //  page de chargement / redirection
  }

  return <>{children}</>;
};

export default ProtectedPage;
