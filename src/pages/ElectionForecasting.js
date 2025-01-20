import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ElectionForecasting.css"; // Custom CSS for styling

const ElectionForecasting = () => {
  const forecastingModels = [
    {
      title: "Polling-Based Forecasting",
      description:
        "Polling-based forecasting uses survey data to predict election outcomes. By aggregating polling data from various sources and adjusting for biases, polling-based models estimate how likely each candidate is to win in different states or nationwide.",
      details: [
        "Poll Aggregation: Combining data from multiple polls to provide a more reliable forecast.",
        "Bias Adjustment: Adjusting poll data for known biases (e.g., over or under-sampling certain demographics).",
        "Tracking Changes: Updating forecasts as new polling data comes in."
      ],
    },
    {
      title: "Statistical Models",
      description:
        "Statistical models use historical data, demographic trends, and other factors to predict election outcomes. These models attempt to forecast how different states will vote based on patterns from previous elections and statistical analysis.",
      details: [
        "Historical Data: Using past voting patterns to predict future outcomes.",
        "Demographic Analysis: Factoring in shifts in population and voter preferences.",
        "Regression Analysis: Applying statistical models to estimate outcomes based on various variables."
      ],
    },
    {
      title: "Simulations and Monte Carlo Models",
      description:
        "Monte Carlo simulations use random sampling and statistical modeling to simulate a large number of possible election scenarios. This approach accounts for uncertainty and provides a range of potential outcomes.",
      details: [
        "Random Sampling: Simulating thousands of possible election results based on historical data.",
        "Range of Outcomes: Providing probabilities for various outcomes, not just a single prediction.",
        "Uncertainty Modeling: Reflecting the uncertainty in polling data, demographic shifts, and other variables."
      ],
    },
    {
      title: "Machine Learning Models",
      description:
        "Machine learning models use algorithms to analyze large datasets and find patterns that can help predict election results. These models can process vast amounts of data, including social media activity, news sentiment, and past election results.",
      details: [
        "Data-Driven: Learning from large datasets of historical elections and current trends.",
        "Algorithmic Predictions: Using algorithms to predict voter preferences and behavior.",
        "Dynamic Learning: Updating models continuously as new data becomes available."
      ],
    },
    {
      title: "Hybrid Models",
      description:
        "Hybrid forecasting models combine different approaches, such as polling data, statistical analysis, and simulations, to create a more robust and accurate prediction of election outcomes.",
      details: [
        "Multi-Model Aggregation: Combining various models to improve prediction accuracy.",
        "Error Minimization: Using different data sources to reduce the chances of errors in forecasting.",
        "Balanced Forecasting: Adjusting for over-reliance on a single method."
      ],
    },
  ];

  return (
    <div className="forecasting-page">
      <div className="container">
        <h1 className="text-center">Election Forecasting Models</h1>
        <p className="text-center text-muted">
          Discover how election outcomes are forecasted using a variety of data-driven models and statistical techniques.
        </p>

        {/* Forecasting Models List */}
        <section className="forecasting-list">
          {forecastingModels.map((model, index) => (
            <div className="forecasting-item" key={index}>
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

export default ElectionForecasting;
