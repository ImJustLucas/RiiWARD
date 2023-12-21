import React from "react";
import RequireAuth from "@components/RequireAuth";

type ProtectedPageProps = {
  children: JSX.Element;
};

export const ProtectedPage = ({ children }: ProtectedPageProps) => {
  return <RequireAuth>{children}</RequireAuth>;
};
