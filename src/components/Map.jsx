import React, { useState } from "react";
import USAMap from "react-usa-map";
import statesJson from "../states.json"; // Assume you have this JSON file
import "./map.css";

export default function Map() {
  const initialStates = statesJson.data.map((state) => ({
    ...state,
    candidate1Votes: 0,
    candidate2Votes: 0,
    dominantParty: null,
    dominantPartyAbbr: null,
    abbreviationPosition: { x: 0, y: 0 } // Coordinates for abbreviation (to be customized)
  }));

  const [states, setStates] = useState(initialStates);
  const [selectedState, setSelectedState] = useState(null);

  const mapCustomization = () => {
    const customization = {};
    states.forEach((state) => {
      const abbreviation = state.attributes.abbreviation;
      let fillColor = "#c0c0c0"; // Default color (light gray)

      if (state.dominantParty === "Candidate 1") {
        fillColor = "#FF5733"; // Candidate 1's color
      } else if (state.dominantParty === "Candidate 2") {
        fillColor = "skyblue"; // Candidate 2's color
      }

      customization[abbreviation] = {
        fill: fillColor,
        stroke: "#333", // Border color for all states
        strokeWidth: 1,
      };
    });
    return customization;
  };

  const mapHandler = (e) => {
    const stateAbbreviation = e.target.dataset.name;
    const state = states.find((s) => s.attributes.abbreviation === stateAbbreviation);
    if (state) {
      setSelectedState(state);
    }
  };

  const voteHandler = (candidate) => {
    if (selectedState) {
      const updatedState = {
        ...selectedState,
        [`${candidate}Votes`]: selectedState[`${candidate}Votes`] + 1,
      };

      const dominantParty =
        updatedState.candidate1Votes > updatedState.candidate2Votes
          ? "Candidate 1"
          : updatedState.candidate1Votes < updatedState.candidate2Votes
          ? "Candidate 2"
          : null;

      const dominantPartyAbbr = dominantParty === "Candidate 1" ? "C1" : dominantParty === "Candidate 2" ? "C2" : null;

      updatedState.dominantParty = dominantParty;
      updatedState.dominantPartyAbbr = dominantPartyAbbr;

      setStates((prevStates) =>
        prevStates.map((state) =>
          state.attributes.abbreviation === selectedState.attributes.abbreviation
            ? updatedState
            : state
        )
      );

      setSelectedState(updatedState);
    }
  };

  const getAbbreviationPosition = (abbreviation) => {
    const positions = {
      AL: { x: 10, y: 30 },
      AK: { x: 20, y: 40 },
      // Add positions for other states...
    };

    return positions[abbreviation] || { x: 0, y: 0 }; // Default position if not found
  };

  return (
    <div className="app-container">
      <h1 className="title">Interactive USA Election Map</h1>
      <div className="map-container">
        <USAMap
          customize={mapCustomization()}
          onClick={mapHandler}
        />
        {/* Render abbreviation on top of each state */}
        {states.map((state) => {
          const { dominantPartyAbbr, abbreviation } = state;
          if (dominantPartyAbbr) {
            const { x, y } = getAbbreviationPosition(abbreviation); // Get position

            return (
              <div
                key={abbreviation}
                className="state-abbreviation"
                style={{
                  position: "absolute",
                  left: `${x}%`,  // Adjust according to your layout
                  top: `${y}%`,   // Adjust according to your layout
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                  pointerEvents: "none",
                  transform: "translate(-50%, -50%)", // Center the abbreviation
                }}
              >
                {dominantPartyAbbr}
              </div>
            );
          }
          return null;
        })}
      </div>

      {selectedState && (
        <div className="info-container">
          <h2 className="state-name">{selectedState.attributes.name}</h2>
          <p className="candidate-votes">
            Candidate 1 Votes: {selectedState.candidate1Votes}
          </p>
          <p className="candidate-votes">
            Candidate 2 Votes: {selectedState.candidate2Votes}
          </p>

          {/* Separate dominant party and abbreviation from votes */}
          

          <div className="button-group">
            <button className="vote-btn" onClick={() => voteHandler("candidate1")}>
              Vote for Candidate 1
            </button>
            <button className="vote-btn" onClick={() => voteHandler("candidate2")}>
              Vote for Candidate 2
            </button>
          </div>
          {selectedState.dominantParty && (
            <div className="dominant-party">
              <p>
                Dominant Party: {selectedState.dominantParty}
              </p>
              <p>
                ({selectedState.dominantPartyAbbr})
              </p>
            </div>
          )}
        </div>
      )}

      {!selectedState && (
        <p className="instruction">
          Click on a state to vote for either Candidate 1 or Candidate 2.
        </p>
      )}
    </div>
  );
}
