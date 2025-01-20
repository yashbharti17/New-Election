import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BettingMarket.css"; // Custom CSS for styling

const BettingMarket = () => {
  const bettingData = {
    intro: "Betting markets for U.S. elections allow participants to wager on outcomes such as the next President, Senate majority, and other key political results. These odds often reflect public sentiment and expert analysis, providing an alternative perspective on the election landscape.",
    currentOdds: [
      { candidate: "Candidate A", odds: "2/1", probability: "33.3%" },
      { candidate: "Candidate B", odds: "5/2", probability: "28.6%" },
      { candidate: "Candidate C", odds: "3/1", probability: "25.0%" },
      { candidate: "Field (Other Candidates)", odds: "6/1", probability: "14.3%" },
    ],
    historicalTrends: [
      "In 2016, betting markets heavily favored Hillary Clinton over Donald Trump, but the election outcome defied expectations.",
      "In 2020, Joe Biden was the consistent favorite across most platforms, aligning with the eventual result.",
    ],
    legalConsiderations:
      "Betting on elections is illegal in many parts of the United States, but international platforms often provide odds for major U.S. elections. Always verify the legality of participation in your jurisdiction.",
  };

  return (
    <div className="betting-market">
      <div className="container">
        <h1 className="text-center">Betting Market in U.S. Elections</h1>
        <p className="text-center text-muted">
          Explore how betting markets offer unique insights into the dynamics of U.S. elections.
        </p>

        {/* Introduction Section */}
        <section className="intro">
          <h2>What Are Betting Markets?</h2>
          <p>{bettingData.intro}</p>
        </section>

        {/* Current Odds Section */}
        <section className="current-odds">
          <h2>Current Betting Odds</h2>
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Candidate</th>
                <th>Odds</th>
                <th>Implied Probability</th>
              </tr>
            </thead>
            <tbody>
              {bettingData.currentOdds.map((item, index) => (
                <tr key={index}>
                  <td>{item.candidate}</td>
                  <td>{item.odds}</td>
                  <td>{item.probability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Historical Trends Section */}
        <section className="historical-trends">
          <h2>Historical Trends</h2>
          <ul>
            {bettingData.historicalTrends.map((trend, index) => (
              <li key={index}>{trend}</li>
            ))}
          </ul>
        </section>

        {/* Legal Considerations Section */}
        <section className="legal-considerations">
          <h2>Legal Considerations</h2>
          <p>{bettingData.legalConsiderations}</p>
        </section>
      </div>
    </div>
  );
};

export default BettingMarket;
