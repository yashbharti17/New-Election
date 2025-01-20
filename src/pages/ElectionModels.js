import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ElectionModels.css"; // Custom CSS for styling

const ElectionModels = () => {
  const models = [
    {
      title: "Election Prediction Models",
      description:
        "These models are used to predict the outcomes of U.S. elections using statistical data, polling information, demographic trends, and other variables. The models attempt to forecast how different states will vote and the overall election results.",
      details: [
        "Polling Models: Aggregate polling data to predict election outcomes.",
        "Statistical Models: Use historical data and trends to make predictions.",
        "Forecasting Models: Combine multiple metrics for more accurate predictions, such as FiveThirtyEight's model."
      ],
    },
    {
      title: "Voter Behavior Models",
      description:
        "Voter behavior models analyze how different factors like demographics, political affiliation, and psychographics influence voters' decisions. Understanding these behaviors helps campaigns and analysts understand which voters are likely to turn out and vote for a specific candidate.",
      details: [
        "Psychographic Profiling: Categorizes voters based on psychological factors.",
        "Demographic Models: Focus on age, race, income, and geography of voters.",
        "Behavioral Trends: Look at voting habits and turnout patterns."
      ],
    },
    {
      title: "Electoral System Models",
      description:
        "The U.S. uses several electoral models for different elections. These models define how votes are converted into seats or winners, including the unique Electoral College model for presidential elections.",
      details: [
        "First-Past-The-Post (FPTP): The candidate with the most votes wins.",
        "Proportional Representation: Allocates seats based on vote percentage.",
        "Electoral College: A winner-takes-all system (with exceptions) to decide the presidential winner."
      ],
    },
    {
      title: "The Electoral College Model",
      description:
        "The U.S. presidential election uses an Electoral College model, where each state has a certain number of electors based on its population. The winner of a state's popular vote typically receives all of the state's electoral votes.",
      details: [
        "Winner-Takes-All: In most states, the candidate with the most votes wins all electoral votes.",
        "Exceptions: Maine and Nebraska use proportional allocation of electoral votes."
      ],
    },
    {
      title: "Campaign Strategy Models",
      description:
        "Campaign strategy models refer to the methods and strategies used by political campaigns to reach voters, gain support, and encourage voter turnout. These strategies often involve data analysis and targeted messaging.",
      details: [
        "Microtargeting: Using data to target specific groups of voters.",
        "Get-Out-The-Vote (GOTV) Strategies: Focused efforts to increase voter turnout.",
        "Digital Campaigning: Leveraging social media and digital ads to influence voters."
      ],
    },
    {
      title: "Polling Models",
      description:
        "Polling models aggregate data from multiple polls to predict election results. These models adjust raw polling data to account for biases, errors, and the margin of error.",
      details: [
        "Margin of Error: Adjusting poll predictions based on the uncertainty inherent in polling.",
        "Weighting: Adjusting poll results to better reflect demographic realities."
      ],
    },
    {
      title: "Voting Systems and Voting Behavior Models",
      description:
        "Voting systems and behavior models explore how people choose their candidates and how electoral systems influence the vote. These models analyze voting decisions based on personal interests, party identification, and specific issues.",
      details: [
        "Rational Choice Model: Voters make decisions based on rational evaluation of candidates.",
        "Party Identification Model: Voters are influenced by their party affiliation.",
        "Issue Voting Model: Voters base decisions on specific issues, such as economy or healthcare."
      ],
    },
  ];

  return (
    <div className="models-page">
      <div className="container">
        <h1 className="text-center">Understanding Election Models in U.S. Politics</h1>
        <p className="text-center text-muted">
          Learn about the different models that influence U.S. elections and how they shape the outcome.
        </p>

        {/* Election Models List */}
        <section className="models-list">
          {models.map((model, index) => (
            <div className="model-item" key={index}>
              <h3>{model.title}</h3>
              <p>{model.description}</p>
              <ul>
                {model.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ElectionModels;
