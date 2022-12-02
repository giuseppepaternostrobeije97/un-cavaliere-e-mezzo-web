import React from "react";
import { Game } from "un-cavaliere-e-mezzo-library";
import { useLocation, useNavigate  } from "react-router-dom";

const GameScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleEnd = () => {
    navigate("/lobby");
  }
  return (
    <div className="container">
      <Game match={location.state}  callBackEndGame={handleEnd}/>
    </div>
  );
};

export default GameScreen;
