import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Button } from "antd";
import "./App.css";
import SecondPage from "./second-page";

const MainPage = () => {
  const [noButtonClicks, setNoButtonClicks] = useState(0);
  const navigate = useNavigate();

  const handleNoClick = () => {
    setNoButtonClicks((prevClicks) => prevClicks + 1);
  };

  const handleYesClick = () => {
    navigate("./second-page");
  };

  const yesButtonStyle = {
    height: `${75 + 75 * noButtonClicks}px`,
    width: `${100 + 100 * noButtonClicks}px`,
  };

  return (
    <div className="main-page">
      <h1>Will you be my valentine?</h1>
      <div className="button-container">
        <Button
          className="yes-button"
          style={yesButtonStyle}
          onClick={handleYesClick}
        >
          Yes
        </Button>
        <Button className="no-button" onClick={handleNoClick}>
          No
        </Button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;
