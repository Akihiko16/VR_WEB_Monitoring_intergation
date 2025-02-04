import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import heartLogo from "./heart.png";
import ScoresPage from "./ScoresPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <img src={heartLogo} alt="Heart Logo" style={{ width: '250px', height: '250px' }} />
        </header>
        <div className="login-options">
          <div className="login-section">
            <Link to="/scores">
            <button style={{ padding: '10px 20px', fontSize: '16px' }}>See Class Scores</button>
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/scores" element={<ScoresPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
