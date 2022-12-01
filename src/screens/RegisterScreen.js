import React from "react";
import { Register } from "un-cavaliere-e-mezzo-library";
import { useNavigate } from "react-router-dom/dist";

const RegisterScreen = () => {
  const navigate = useNavigate();

  const goToLobby = () => {
    navigate("/lobby");
  };

  return (
    <div className="container">
      <Register callbackRegister={goToLobby} />
    </div>
  );
};

export default RegisterScreen;
