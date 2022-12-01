import "./App.css";
import { Routes, Route } from "react-router-dom";
import LobbyScreen from "./screens/LobbyScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ArenaScreen from "./screens/ArenaScreen";
import GameScreen from "./screens/GameScreen";
import RankingScreen from "./screens/RankingScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/lobby" element={<LobbyScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/arena" element={<ArenaScreen />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/ranking" element={<RankingScreen />} />
      </Routes>
    </div>
  );
}

export default App;
