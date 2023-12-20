import React from "react";
import ProtectedPage from "@components/RequireAuth";

const MyProtectedContent = () => {
  return (
    <ProtectedPage>
      <div>Contenu de ma page protégée</div>
    </ProtectedPage>
  );
};

export default MyProtectedContent;
