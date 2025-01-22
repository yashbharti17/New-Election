import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./ideal.css"

const Ideal = () => {
  
  const [tableData, setTableData] = useState([
    {
      id: 1,
      factor: "Accomplishments",
      weightage: 0.05,
      ideal: 100,
      aiScoreA: 85,
      aiScoreB: 87,
      expertScoreA: 90,
      expertScoreB: 92,
      weightedScoreA: 5,
      weightedScoreB: 5,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.9,
      candidateWeightedScoreB: 4.0,
    },
    {
      id: 2,
      factor: "Age",
      weightage: 0.02,
      ideal: 100,
      aiScoreA: 80,
      aiScoreB: 75,
      expertScoreA: 75,
      expertScoreB: 72,
      weightedScoreA: 2,
      weightedScoreB: 2,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 1.56,
      candidateWeightedScoreB: 1.6,
    },
    {
      id: 3,
      factor: "Anti Corruption stance",
      weightage: 0.08,
      ideal: 100,
      aiScoreA: 88,
      aiScoreB: 90,
      expertScoreA: 92,
      expertScoreB: 94,
      weightedScoreA: 8,
      weightedScoreB: 8,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 6.24,
      candidateWeightedScoreB: 6.4,
    },
    {
      id: 4,
      factor: "Believe in America",
      weightage: 0.02,
      ideal: 100,
      aiScoreA: 84,
      aiScoreB: 82,
      expertScoreA: 87,
      expertScoreB: 85,
      weightedScoreA: 2,
      weightedScoreB: 2,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 1.56,
      candidateWeightedScoreB: 1.6,
    },
    {
      id: 5,
      factor: "Climate",
      weightage: 0.02,
      ideal: 100,
      aiScoreA: 75,
      aiScoreB: 78,
      expertScoreA: 78,
      expertScoreB: 80,
      weightedScoreA: 2,
      weightedScoreB: 2,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 1.56,
      candidateWeightedScoreB: 1.6,
    },
    {
      id: 6,
      factor: "Communication skills",
      weightage: 0.05,
      ideal: 100,
      aiScoreA: 90,
      aiScoreB: 92,
      expertScoreA: 88,
      expertScoreB: 86,
      weightedScoreA: 5,
      weightedScoreB: 5,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.9,
      candidateWeightedScoreB: 4.0,
    },
    {
      id: 7,
      factor: "Economic Success",
      weightage: 0.04,
      ideal: 100,
      aiScoreA: 85,
      aiScoreB: 87,
      expertScoreA: 89,
      expertScoreB: 90,
      weightedScoreA: 4,
      weightedScoreB: 4,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.12,
      candidateWeightedScoreB: 3.2,
    },
    {
      id: 8,
      factor: "Educated",
      weightage: 0.04,
      ideal: 100,
      aiScoreA: 87,
      aiScoreB: 89,
      expertScoreA: 90,
      expertScoreB: 92,
      weightedScoreA: 4,
      weightedScoreB: 4,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.12,
      candidateWeightedScoreB: 3.2,
    },
    {
      id: 9,
      factor: "Experience in political environment",
      weightage: 0.04,
      ideal: 100,
      aiScoreA: 92,
      aiScoreB: 94,
      expertScoreA: 95,
      expertScoreB: 96,
      weightedScoreA: 4,
      weightedScoreB: 4,
      candidateScoreA: 85,
      candidateScoreB: 87,
      candidateWeightedScoreA: 3.4,
      candidateWeightedScoreB: 3.48,
    },
    {
      id: 10,
      factor: "Exposure to foreign/Domestic policies",
      weightage: 0.04,
      ideal: 100,
      aiScoreA: 65,
      aiScoreB: 62,
      expertScoreA: 70,
      expertScoreB: 68,
      weightedScoreA: 4,
      weightedScoreB: 4,
      candidateScoreA: 34,
      candidateScoreB: 36,
      candidateWeightedScoreA: 1.36,
      candidateWeightedScoreB: 1.44,
    },
    {
      id: 11,
      factor: "Family Success",
      weightage: 0.04,
      ideal: 100,
      aiScoreA: 78,
      aiScoreB: 80,
      expertScoreA: 80,
      expertScoreB: 82,
      weightedScoreA: 4,
      weightedScoreB: 4,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.12,
      candidateWeightedScoreB: 3.2,
    },
    {
      id: 12,
      factor: "Freedom of speech supporter",
      weightage: 0.07,
      ideal: 100,
      aiScoreA: 89,
      aiScoreB: 91,
      expertScoreA: 92,
      expertScoreB: 93,
      weightedScoreA: 7,
      weightedScoreB: 7,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 5.46,
      candidateWeightedScoreB: 5.6,
    },
    {
      id: 13,
      factor: "Has agenda",
      weightage: 0.04,
      ideal: 100,
      aiScoreA: 80,
      aiScoreB: 82,
      expertScoreA: 82,
      expertScoreB: 83,
      weightedScoreA: 4,
      weightedScoreB: 4,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.12,
      candidateWeightedScoreB: 3.2,
    },
    {
      id: 14,
      factor: "Health",
      weightage: 0.02,
      ideal: 100,
      aiScoreA: 70,
      aiScoreB: 72,
      expertScoreA: 68,
      expertScoreB: 70,
      weightedScoreA: 2,
      weightedScoreB: 2,
      candidateScoreA: 64,
      candidateScoreB: 66,
      candidateWeightedScoreA: 1.28,
      candidateWeightedScoreB: 1.32,
    },
    {
      id: 15,
      factor: "Honesty",
      weightage: 0.06,
      ideal: 100,
      aiScoreA: 85,
      aiScoreB: 88,
      expertScoreA: 90,
      expertScoreB: 91,
      weightedScoreA: 6,
      weightedScoreB: 6,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 4.68,
      candidateWeightedScoreB: 4.8,
    },
    {
      id: 16,
      factor: "How centric is his policies are",
      weightage: 0.04,
      ideal: 100,
      aiScoreA: 81,
      aiScoreB: 84,
      expertScoreA: 85,
      expertScoreB: 88,
      weightedScoreA: 4,
      weightedScoreB: 4,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.12,
      candidateWeightedScoreB: 3.2,
    },
    {
      id: 17,
      factor: "Lead by example",
      weightage: 0.04,
      ideal: 100,
      aiScoreA: 86,
      aiScoreB: 88,
      expertScoreA: 89,
      expertScoreB: 90,
      weightedScoreA: 4,
      weightedScoreB: 4,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.12,
      candidateWeightedScoreB: 3.2,
    },
    {
      id: 18,
      factor: "Likeability",
      weightage: 0.04,
      ideal: 100,
      aiScoreA: 92,
      aiScoreB: 93,
      expertScoreA: 94,
      expertScoreB: 96,
      weightedScoreA: 4,
      weightedScoreB: 4,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.12,
      candidateWeightedScoreB: 3.2,
    },
    {
      id: 19,
      factor: "Public Health",
      weightage: 0.04,
      ideal: 100,
      aiScoreA: 85,
      aiScoreB: 88,
      expertScoreA: 89,
      expertScoreB: 90,
      weightedScoreA: 4,
      weightedScoreB: 4,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.12,
      candidateWeightedScoreB: 3.2,
    },
    {
      id: 20,
      factor: "Social Success",
      weightage: 0.04,
      ideal: 100,
      aiScoreA: 80,
      aiScoreB: 81,
      expertScoreA: 85,
      expertScoreB: 87,
      weightedScoreA: 4,
      weightedScoreB: 4,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.12,
      candidateWeightedScoreB: 3.2,
    },
    {
      id: 21,
      factor: "Stand on political issues: AI",
      weightage: 0.04,
      ideal: 100,
      aiScoreA: 85,
      aiScoreB: 86,
      expertScoreA: 89,
      expertScoreB: 91,
      weightedScoreA: 4,
      weightedScoreB: 4,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.12,
      candidateWeightedScoreB: 3.2,
    },
    {
      id: 22,
      factor: "Stand on political issues: Economy",
      weightage: 0.04,
      ideal: 100,
      aiScoreA: 83,
      aiScoreB: 84,
      expertScoreA: 85,
      expertScoreB: 87,
      weightedScoreA: 4,
      weightedScoreB: 4,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.12,
      candidateWeightedScoreB: 3.2,
    },
    {
      id: 23,
      factor: "Stand on political issues: Immigration",
      weightage: 0.04,
      ideal: 100,
      aiScoreA: 79,
      aiScoreB: 82,
      expertScoreA: 85,
      expertScoreB: 88,
      weightedScoreA: 4,
      weightedScoreB: 4,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.12,
      candidateWeightedScoreB: 3.2,
    },
    {
      id: 24,
      factor: "Team approach",
      weightage: 0.05,
      ideal: 100,
      aiScoreA: 90,
      aiScoreB: 91,
      expertScoreA: 92,
      expertScoreB: 93,
      weightedScoreA: 5,
      weightedScoreB: 5,
      candidateScoreA: 78,
      candidateScoreB: 80,
      candidateWeightedScoreA: 3.9,
      candidateWeightedScoreB: 4.0,
    },
  ]);
  

  const handleScoreChange = (id, field, value) => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.id === id
          ? {
              ...row,
              [field]: value,
              candidateWeightedScoreA:
                field === "candidateScoreA"
                  ? (row.weightage * value).toFixed(2)
                  : row.candidateWeightedScoreA,
              candidateWeightedScoreB:
                field === "candidateScoreB"
                  ? (row.weightage * value).toFixed(2)
                  : row.candidateWeightedScoreB,
            }
          : row
      )
    );
  };

  useEffect(() => {
    const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipElements.forEach((element) => {
      new window.bootstrap.Tooltip(element); // Use window.bootstrap to access Bootstrap
    });
  }, []);
  const aiTotalScoreA = tableData.reduce((sum, row) => sum + row.aiScoreA, 0);
  const aiTotalScoreB = tableData.reduce((sum, row) => sum + row.aiScoreB, 0);
  
  const expertTotalScoreA = tableData.reduce((sum, row) => sum + row.expertScoreA, 0);
  const expertTotalScoreB = tableData.reduce((sum, row) => sum + row.expertScoreB, 0);
  const totalIdeal = tableData.reduce((acc, row) => acc + row.ideal, 0);
  const totalWeightedScoreA = tableData.reduce((acc, row) => acc + row.weightedScoreA, 0);
  const totalWeightedScoreB = tableData.reduce((acc, row) => acc + row.weightedScoreB, 0);
  const totalCandidateScoreA = tableData.reduce((acc, row) => acc + row.candidateScoreA, 0);
  const totalCandidateScoreB = tableData.reduce((acc, row) => acc + row.candidateScoreB, 0);
  const totalCandidateWeightedScoreA = tableData.reduce(
    (acc, row) => acc + parseFloat(row.candidateWeightedScoreA),
    0
  );
  const totalCandidateWeightedScoreB = tableData.reduce(
    (acc, row) => acc + parseFloat(row.candidateWeightedScoreB),
    0
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Ideal Candidate Analysis</h1>
      <div className="table-responsive">
        <table className="table table-bordered custom-table table-hover">
          <thead className="table-dark">
            <tr>
              <th rowSpan="2">#</th>
              <th rowSpan="2">Factor</th>
              <th rowSpan="2">Weightage</th>
              <th rowSpan="2">Ideal</th>
              <th colSpan="2" className="text-center">
                AI Score
              </th>
              <th colSpan="2" className="text-center">
                Expert Score
              </th>
              <th colSpan="2" className="text-center">
                Weighted Score
              </th>
              <th colSpan="2" className="text-center">
                Your Candidate Score
              </th>
              <th colSpan="2" className="text-center">
                Your Candidate Weighted Score
              </th>
            </tr>
            <tr>
              <th className="text-center">A</th>
              <th className="text-center">B</th>
              <th className="text-center">A</th>
              <th className="text-center">B</th>
              <th className="text-center">A</th>
              <th className="text-center">B</th>
              <th className="text-center">A</th>
              <th className="text-center">B</th>
              <th className="text-center">A</th>
              <th className="text-center">B</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td style={{ fontWeight: 'bold',backgroundColor:'#009879',color:'white'}}>{row.id}</td>
                <td style={{fontWeight:'bold',backgroundColor:'#009879',color:'white'}}  data-bs-toggle="tooltip" title={`Details about ${row.factor}`}>{row.factor}</td>
                <td>{row.weightage}</td>
                <td>{row.ideal}</td>
                {/* AI Score A and B displayed side by side */}
                <td>
                  <input
                    type="number"
                    value={row.aiScoreA}
                    onChange={(e) =>
                      handleScoreChange(row.id, "aiScoreA", parseFloat(e.target.value))
                    }
                    className="form-control"
                    placeholder="A"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.aiScoreB}
                    onChange={(e) =>
                      handleScoreChange(row.id, "aiScoreB", parseFloat(e.target.value))
                    }
                    className="form-control"
                    placeholder="B"
                  />
                </td>
                {/* Expert Score A and B displayed side by side */}
                <td>
                  <input
                    type="number"
                    value={row.expertScoreA}
                    onChange={(e) =>
                      handleScoreChange(row.id, "expertScoreA", parseFloat(e.target.value))
                    }
                    className="form-control"
                    placeholder="A"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.expertScoreB}
                    onChange={(e) =>
                      handleScoreChange(row.id, "expertScoreB", parseFloat(e.target.value))
                    }
                    className="form-control"
                    placeholder="B"
                  />
                </td>
                {/* Weighted Score A and B displayed side by side */}
                <td>{row.weightedScoreA}</td>
                <td>{row.weightedScoreB}</td>
                {/* Candidate Score A and B displayed side by side */}
                <td>
                  <input
                    type="number"
                    value={row.candidateScoreA}
                    onChange={(e) =>
                      handleScoreChange(row.id, "candidateScoreA", parseFloat(e.target.value))
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.candidateScoreB}
                    onChange={(e) =>
                      handleScoreChange(row.id, "candidateScoreB", parseFloat(e.target.value))
                    }
                    className="form-control"
                  />
                </td>
                {/* Candidate Weighted Score A and B displayed side by side */}
                <td>{row.candidateWeightedScoreA}</td>
                <td>{row.candidateWeightedScoreB}</td>
              </tr>
            ))}
            {/* Total Row */}
            <tr className="table-info">
              <td colSpan="3" className="text-end fw-bold">
                Total
              </td>
              <td>{totalIdeal}</td>
              <td>{aiTotalScoreA}</td>
              <td>{aiTotalScoreB}</td>
              <td>{expertTotalScoreA}</td>
              <td>{expertTotalScoreB}</td>
              <td>{totalWeightedScoreA}</td>
              <td>{totalWeightedScoreB}</td>
              <td>{totalCandidateScoreA}</td>
              <td>{totalCandidateScoreB}</td>
              <td>{totalCandidateWeightedScoreA.toFixed(2)}</td>
              <td>{totalCandidateWeightedScoreB.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ideal;
