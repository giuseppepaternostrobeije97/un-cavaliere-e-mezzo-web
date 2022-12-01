import React from "react";
import { Game } from "un-cavaliere-e-mezzo-library";
import { useLocation } from "react-router-dom";

const GameScreen = () => {
  const location = useLocation();
  return (
    <div className="container">
      <Game match={location.state} />
    </div>
  );
};

export default GameScreen;
