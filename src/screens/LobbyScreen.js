import React from "react";
import { Lobby } from "un-cavaliere-e-mezzo-library";
import { useNavigate } from "react-router-dom/dist";

const LobbyScreen = () => {
  // {"users":[{"id":151,"username":"Pater97","email":"pater97@pater.it","password":"35595275cb1fad427cf49459eaec0e09889f945799bf62d41c33c88b9573936b","score":0,"token":null,"refreshToken":null,"online":false}],"idLobby":17,"accessType":false,"userMax":7,"usersSize":1}
  const navigate = useNavigate();

  function handleLobby(lobby) {
    navigate("arena", { state: lobby });
  }

  return (
    <div className="container">
      <Lobby goLobby={handleLobby} />
    </div>
  );
};

export default LobbyScreen;
