import './App.css';
import { Routes, Route } from "react-router-dom";
import LobbyScreen from './screens/LobbyScreen'
import LoginScreen from './screens/LoginScreen';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LobbyScreen/>} />
        <Route path='login' element={<LoginScreen/>} />
      </Routes>
    </div>
  );
}

export default App;
