import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DataSources.css"; // Custom CSS for styling

const DataSources = () => {
  const sources = [
    {
      name: "Federal Election Commission (FEC)",
      description:
        "The FEC provides official information on federal elections, including election results, campaign finance data, and candidate filings.",
      link: "https://www.fec.gov/",
    },
    {
      name: "Ballotpedia",
      description:
        "Ballotpedia is a comprehensive resource for information on U.S. elections, providing data on candidates, political parties, and election results.",
      link: "https://ballotpedia.org/",
    },
    {
      name: "The New York Times - Politics",
      description:
        "The New York Times offers in-depth election coverage, live updates, and expert analysis of political races and issues affecting U.S. voters.",
      link: "https://www.nytimes.com/section/politics",
    },
    {
      name: "FiveThirtyEight",
      description:
        "FiveThirtyEight offers statistical analysis and polling data, providing insights into election forecasts and political trends across the U.S.",
      link: "https://fivethirtyeight.com/",
    },
    {
      name: "GovTrack.us",
      description:
        "GovTrack provides data on U.S. legislation and legislative activity, helping voters track the work of elected officials and the bills they introduce.",
      link: "https://www.govtrack.us/",
    },
    {
      name: "Election Data from Pew Research",
      description:
        "Pew Research Center offers reports and surveys on U.S. elections, public opinion, and voter behavior, providing valuable insights into election trends.",
      link: "https://www.pewresearch.org/topics/elections/",
    },
    {
      name: "U.S. Census Bureau",
      description:
        "The U.S. Census Bureau provides demographic data which is crucial for understanding voting patterns, district mapping, and the impact of elections across different populations.",
      link: "https://www.census.gov/",
    },
  ];

  return (
    <div className="data-sources">
      <div className="container">
        <h1 className="text-center">Reliable Data Sources for U.S. Elections</h1>
        <p className="text-center text-muted">
          Explore trusted sources for comprehensive and up-to-date election data.
        </p>

        {/* Data Sources List */}
        <section className="sources-list">
          <ul>
            {sources.map((source, index) => (
              <li key={index} className="source-item">
                <h3>
                  <a href={source.link} target="_blank" rel="noopener noreferrer">
                    {source.name}
                  </a>
                </h3>
                <p>{source.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DataSources;
