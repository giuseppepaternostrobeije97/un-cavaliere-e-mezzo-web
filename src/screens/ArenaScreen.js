import React from "react";
import { useLocation } from "react-router-dom";
import { Arena } from "un-cavaliere-e-mezzo-library";
import { useNavigate } from "react-router-dom/dist";

const ArenaScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function handleGame(match, webSocket) {
    navigate("/game", {
      state: {
        match: match,
        webSocket: webSocket,
      },
    });
  }

  function exitLobby() {
    navigate("/lobby");
  }

  return (
    <div className="container">
      <Arena lobby={location.state} game={handleGame} exitLobby={exitLobby} />
    </div>
  );
};

export default ArenaScreen;
