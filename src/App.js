import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Ensure this contains the CSS you provided
import ElectionProcess from './ElectionProcess';
import { statesData } from './data';
import Map from './components/Map';
import ElectionNavbar from './components/ElectionNavbar';
import Ideal from './pages/Ideal';
import Background from './pages/Background';
import UpcomingElection from './pages/UpcomingElection';
import BettingMarket from './pages/BettingMarket';
import DataSources from './pages/DataSources';
import ElectionModels from './pages/ElectionModels';
import ElectionForecasting from './pages/ElectionForecasting';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const center = [37.8, -96]; // Center of the US
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [isTopRightInfoOpen, setIsTopRightInfoOpen] = useState(false);

  const [stateScores, setStateScores] = useState(() => {
    const scores = {};
    statesData.features.forEach((state) => {
      scores[state.properties.name] = state.properties.score || 0;
    });
    return scores;
  });

  const updateScore = (stateName, change) => {
    setStateScores((prevScores) => ({
      ...prevScores,
      [stateName]: prevScores[stateName] + change,
    }));
  };

  const InfoPanel = () => (
    <div className="info-panel">
      {selectedState ? (
        <>
          <h2>{selectedState}</h2>
          <p>Score: {stateScores[selectedState]}</p>
          <button onClick={() => updateScore(selectedState, 1)}>Vote Up</button>
          <button onClick={() => updateScore(selectedState, -1)}>Vote Down</button>
        </>
      ) : (
        <p>Click on a state to see details.</p>
      )}
      <button
        className="toggle-button"
        onClick={() => setIsTopRightInfoOpen((prev) => !prev)}
      >
        {isTopRightInfoOpen ? 'Hide Scores' : 'Show Scores'}
      </button>
    </div>
  );

  const TopRightInfo = () => (
    <div className="top-right-info">
      <h3>State Scores</h3>
      <ul>
        {Object.entries(stateScores).map(([state, score]) => (
          <li key={state}>
            <strong>{state}:</strong> {score}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <Router>
      <ElectionNavbar />
      <div className="app">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="home-page">
                {/* Map Section */}
                <Map
                  setSelectedState={setSelectedState}
                  setHoveredState={setHoveredState}
                  statesData={statesData}
                />

                {/* Info Panel */}
                {selectedState && <InfoPanel />}

                {/* Top Right Info (optional toggleable) */}
                {isTopRightInfoOpen && <TopRightInfo />}

                {/* Election Process Section (below Map) */}
                <div className="election-process-container">
                  <ElectionProcess />
                </div>
              </div>
            }
          />

          {/* Ideal Page */}
          <Route path="/ideal" element={<Ideal />} />
          <Route path="/background" element={<Background />} />
          
          <Route path="/upcoming-election" element={<UpcomingElection />} />
          <Route path="/betting-market" element={<BettingMarket />} />
          <Route path="/data-sources" element={<DataSources />} />
          <Route path="/model" element={<ElectionModels />} />
          <Route path="/forecasting" element={<ElectionForecasting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
