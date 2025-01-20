import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Ideal = () => {
  // Define state to store table data
  const [tableData, setTableData] = useState([
    { id: 1, factor: "Accomplishments", weightage: 0.05, ideal: 100, weightedScore: 5, candidateScore: 78, candidateWeightedScore: 3.9 },
    { id: 2, factor: "Age", weightage: 0.02, ideal: 100, weightedScore: 2, candidateScore: 78, candidateWeightedScore: 1.56 },
    { id: 3, factor: "Anti Corruption stance", weightage: 0.08, ideal: 100, weightedScore: 8, candidateScore: 78, candidateWeightedScore: 6.24 },
    { id: 4, factor: "Believe in America", weightage: 0.02, ideal: 100, weightedScore: 2, candidateScore: 78, candidateWeightedScore: 1.56 },
    { id: 5, factor: "Climate", weightage: 0.02, ideal: 100, weightedScore: 2, candidateScore: 78, candidateWeightedScore: 1.56 },
    { id: 6, factor: "Communication skills", weightage: 0.05, ideal: 100, weightedScore: 5, candidateScore: 78, candidateWeightedScore: 3.9 },
    { id: 7, factor: "Economic Success", weightage: 0.04, ideal: 100, weightedScore: 4, candidateScore: 78, candidateWeightedScore: 3.12 },
    { id: 8, factor: "Educated", weightage: 0.04, ideal: 100, weightedScore: 4, candidateScore: 78, candidateWeightedScore: 3.12 },
    { id: 9, factor: "Experience in political environment", weightage: 0.04, ideal: 100, weightedScore: 4, candidateScore: 85, candidateWeightedScore: 3.4 },
    { id: 10, factor: "Exposure to foreign/Domestic policies", weightage: 0.04, ideal: 100, weightedScore: 4, candidateScore: 34, candidateWeightedScore: 1.36 },
    { id: 11, factor: "Family Success", weightage: 0.04, ideal: 100, weightedScore: 4, candidateScore: 78, candidateWeightedScore: 3.12 },
    { id: 12, factor: "Freedom of speech supporter", weightage: 0.07, ideal: 100, weightedScore: 7, candidateScore: 78, candidateWeightedScore: 5.46 },
    { id: 13, factor: "Has agenda", weightage: 0.04, ideal: 100, weightedScore: 4, candidateScore: 78, candidateWeightedScore: 3.12 },
    { id: 14, factor: "Health", weightage: 0.02, ideal: 100, weightedScore: 2, candidateScore: 64, candidateWeightedScore: 1.28 },
    { id: 15, factor: "Honesty", weightage: 0.06, ideal: 100, weightedScore: 6, candidateScore: 78, candidateWeightedScore: 4.68 },
    { id: 16, factor: "How centric his policies are", weightage: 0.04, ideal: 100, weightedScore: 4, candidateScore: 78, candidateWeightedScore: 3.12 },
    { id: 17, factor: "Lead by example", weightage: 0.04, ideal: 100, weightedScore: 4, candidateScore: 78, candidateWeightedScore: 3.12 },
    { id: 18, factor: "Likeability", weightage: 0.04, ideal: 100, weightedScore: 4, candidateScore: 78, candidateWeightedScore: 3.12 },
    { id: 19, factor: "Public Health", weightage: 0.04, ideal: 100, weightedScore: 4, candidateScore: 78, candidateWeightedScore: 3.12 },
    { id: 20, factor: "Social Success", weightage: 0.04, ideal: 100, weightedScore: 4, candidateScore: 78, candidateWeightedScore: 3.12 },
    { id: 21, factor: "Stand on political issues: AI", weightage: 0.04, ideal: 100, weightedScore: 4, candidateScore: 78, candidateWeightedScore: 3.12 },
    { id: 22, factor: "Stand on political issues: Economy", weightage: 0.04, ideal: 100, weightedScore: 4, candidateScore: 78, candidateWeightedScore: 3.12 },
    { id: 23, factor: "Stand on political issues: Immigration", weightage: 0.04, ideal: 100, weightedScore: 4, candidateScore: 78, candidateWeightedScore: 3.12 },
    { id: 24, factor: "Team approach", weightage: 0.05, ideal: 100, weightedScore: 5, candidateScore: 78, candidateWeightedScore: 3.9 },
  ]);

  // Update the candidate score in the state
  const handleScoreChange = (id, value) => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.id === id
          ? { ...row, candidateScore: value, candidateWeightedScore: (row.weightage * value).toFixed(2) }
          : row
      )
    );
  };

  // Calculate totals
  const totalIdeal = tableData.reduce((acc, row) => acc + row.ideal, 0);
  const totalWeightage = tableData.reduce((acc, row) => acc + row.weightage, 0);
  const totalWeightedScore = tableData.reduce((acc, row) => acc + row.weightedScore, 0);
  const totalCandidateScore = tableData.reduce((acc, row) => acc + row.candidateScore, 0);
  const totalCandidateWeightedScore = tableData.reduce(
    (acc, row) => acc + parseFloat(row.candidateWeightedScore), 0
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Ideal Candidate Analysis</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Factor</th>
              <th>Weightage</th>
              <th>Ideal</th>
              <th>Weighted Score</th>
              <th>Your Candidate Score</th>
              <th>Your Candidate Weighted Score</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.factor}</td>
                <td>{row.weightage}</td>
                <td>{row.ideal}</td>
                <td>{row.weightedScore}</td>
                {/* Input for candidate score */}
                <td>
                  <input
                    type="number"
                    value={row.candidateScore}
                    onChange={(e) => handleScoreChange(row.id, parseFloat(e.target.value))}
                    className="form-control"
                  />
                </td>
                <td>{row.candidateWeightedScore}</td>
              </tr>
            ))}
            {/* Total Row */}
            <tr className="table-info">
              <td colSpan="2" className="text-end fw-bold">
                Total
              </td>
              <td>{totalIdeal}</td>
              <td>{totalWeightage.toFixed(2)}</td>
              <td>{totalWeightedScore}</td>
              <td>{totalCandidateScore}</td>
              <td>{totalCandidateWeightedScore.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ideal;
