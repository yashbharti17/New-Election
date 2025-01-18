import React, { useState } from 'react';
import './index.css';
import ElectionProcess from './ElectionProcess';
import { statesData } from './data'; // Ensure this is properly imported and contains valid GeoJSON data
import Map from './components/Map';
import ElectionNavbar from './components/ElectionNavbar';



function App() {
  const center = [37.8, -96]; // Center of the US
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [isTopRightInfoOpen, setIsTopRightInfoOpen] = useState(false);

  // Default scores for states (initialize with statesData)
  const [stateScores, setStateScores] = useState(() => {
    const scores = {};
    statesData.features.forEach((state) => {
      scores[state.properties.name] = state.properties.score || 0;
    });
    return scores;
  });

  // Update score for a state
  const updateScore = (stateName, change) => {
    setStateScores((prevScores) => ({
      ...prevScores,
      [stateName]: prevScores[stateName] + change,
    }));
  };

  const HoverInfo = () => (
    <div className="hover-info">
      {hoveredState ? (
        <p>
          <strong>{hoveredState.name}</strong>: {hoveredState.score}
        </p>
      ) : (
        <p>Hover over a state to see its score.</p>
      )}
    </div>
  );

  // Utility function to determine the color based on the score
  const getColor = (score) => {
    return score > 20
      ? '#006400' // Dark green
      : score > 10
        ? '#228B22' // Forest green
        : score > 0
          ? '#7FFF00' // Chartreuse green
          : '#FF6347'; // Tomato red
  };

  const InfoPanel = () => (
    <>
      <div className="info-panel">
        <div>
          {selectedState ? (
            <>
              <h2>{selectedState}</h2>
              <p>Score: {stateScores[selectedState]}</p>
              <button onClick={() => updateScore(selectedState, 1)}>Vote Up</button>
              <button onClick={() => updateScore(selectedState, -1)}>Vote Down</button>

              <HoverInfo />
            </>
          ) : (
            <p>Click on a state to see details.</p>
          )}
        </div>


        {/* Toggle Button for TopRightInfo */}
        <button
          className="toggle-button"
          onClick={() => setIsTopRightInfoOpen((prev) => !prev)}
        >
          {isTopRightInfoOpen ? 'Hide Scores' : 'Show Scores'}
        </button>
      </div>
    </>
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

  // US boundary coordinates for the map
  // const usBounds = [
  //   [24.396308, -125.0], // Southwest corner (Hawaii is excluded here)
  //   [49.384358, -66.93457], // Northeast corner
  // ];


  return (
    <>
    <ElectionNavbar/> 
      <div className="app">

        <Map/>

        {/* Conditionally Render TopRightInfo */}
        {isTopRightInfoOpen && <TopRightInfo />}

        

        <br />
        <br />
      </div>
      <ElectionProcess />
    </>
  );
}

export default App;
