import React, { useState } from "react";
import USAMap from "react-usa-map";
import statesJson from "../states.json";
import "./map.css";

export default function Map() {
  const initialStates = statesJson.data.map((state) => ({
    ...state,
    score: 0, // Add an initial score for each state
  }));

  const [states, setStates] = useState(initialStates);
  const [selectedState, setSelectedState] = useState(null); // Store the selected state
  const [hoveredState, setHoveredState] = useState(null); // Store the hovered state
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 }); // Tooltip position

  const mapCustomization = () => {
    const customization = {};
    states.forEach((state) => {
      const abbreviation = state.attributes.abbreviation;
      customization[abbreviation] = {
        fill:
          selectedState &&
          selectedState.attributes.abbreviation === abbreviation
            ? "#ff7f50" // Coral color for selected state
            : hoveredState === abbreviation
            ? "#90ee90" // Light green for hover
            : "#c0c0c0", // Default color (light gray)
        stroke: "#333", // Border color for all states
        strokeWidth: 1,
      };
    });
    return customization;
  };

  const mapHandler = (e) => {
    const stateAbbreviation = e.target.dataset.name;
    const state = states.find(
      (s) => s.attributes.abbreviation === stateAbbreviation
    );
    if (state) {
      setSelectedState(state); // Set the clicked state as the selected state
    }
  };

  const upvoteHandler = () => {
    if (selectedState) {
      setStates((prevStates) =>
        prevStates.map((state) =>
          state.attributes.abbreviation === selectedState.attributes.abbreviation
            ? { ...state, score: state.score + 1 }
            : state
        )
      );
      setSelectedState((prevState) => ({
        ...prevState,
        score: prevState.score + 1,
      }));
    }
  };

  const downvoteHandler = () => {
    if (selectedState) {
      setStates((prevStates) =>
        prevStates.map((state) =>
          state.attributes.abbreviation === selectedState.attributes.abbreviation
            ? { ...state, score: state.score - 1 }
            : state
        )
      );
      setSelectedState((prevState) => ({
        ...prevState,
        score: prevState.score - 1,
      }));
    }
  };

  const onHover = (e) => {
    const hoveredAbbreviation = e.target.dataset.name;
    const state = states.find(
      (s) => s.attributes.abbreviation === hoveredAbbreviation
    );
    if (state) {
      setHoveredState(state.attributes.name); // Set the hovered state's name
      const rect = e.target.getBoundingClientRect(); // Get bounding box of the state
      setTooltipPosition({
        x: rect.left + rect.width / 2, // Tooltip position X
        y: rect.top - 20, // Tooltip position Y (above the state)
      });
    }
  };

  const onHoverExit = () => {
    setHoveredState(null); // Clear the hovered state
  };

  return (
    <div className="app-container">
      <h1 className="title">Interactive USA Map</h1>
      <div className="map-container">
        <USAMap
          customize={mapCustomization()}
          onClick={mapHandler}
          onMouseOver={onHover}
          onMouseOut={onHoverExit}
        />
        {hoveredState && (
          <div
            className="tooltip"
            style={{
              position: "absolute",
              top: `${tooltipPosition.y}px`,
              left: `${tooltipPosition.x}px`,
              transform: "translate(-50%, -100%)",
              backgroundColor: "#333",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "5px",
              fontSize: "14px",
              pointerEvents: "none",
            }}
          >
            {hoveredState}
          </div>
        )}
      </div>

      {selectedState && (
        <div className="info-container">
          <h2 className="state-name">{selectedState.attributes.name}</h2>
          <p className="state-score">Score: {selectedState.score}</p>
          <div className="button-group">
            <button className="upvote-btn" onClick={upvoteHandler}>
              👍 Upvote
            </button>
            <button className="downvote-btn" onClick={downvoteHandler}>
              👎 Downvote
            </button>
          </div>
        </div>
      )}

      {!selectedState && (
        <p className="instruction">
          Click on a state to view its details and update the score.
        </p>
      )}
    </div>
  );
}
