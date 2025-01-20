import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UpcomingElection.css"; // Custom CSS for styling

const UpcomingElection = () => {
  const electionData = {
    date: "November 5, 2024", // Replace with actual upcoming date
    offices: [
      "President of the United States",
      "U.S. House of Representatives",
      "U.S. Senate (Class 1 seats)",
      "State Governors",
      "State Legislatures",
    ],
    registrationDeadline: "October 7, 2024", // Replace with actual deadline
    resources: [
      {
        title: "Check Your Voter Registration",
        link: "https://www.nass.org/can-I-vote",
      },
      {
        title: "Find Your Polling Place",
        link: "https://www.vote.org/polling-place-locator/",
      },
      {
        title: "Learn About Candidates and Issues",
        link: "https://www.ballotready.org/",
      },
    ],
  };

  return (
    <div className="upcoming-elections">
      <div className="container">
        <h1 className="text-center">Upcoming U.S. Election</h1>
        <p className="text-center text-muted">Elections are a fundamental part of the democratic process, and your vote plays a crucial role in shaping the future of the country. The upcoming U.S. election is not just about choosing leaders, but also about deciding the direction of important national policies on healthcare, education, the economy, civil rights, climate change, and much more. Staying informed about the candidates, their platforms, and the key issues can empower you to make a well-considered decision that reflects your values and priorities.</p>

        <section className="election-date">
          <h2>Election Date</h2>
          <p>
            The next general election will be held on <strong>{electionData.date}</strong>. Mark your calendars and
            prepare to vote!
          </p>
        </section>

        <section className="offices-up-for-election">
          <h2>Offices Up for Election</h2>
          <ul>
            {electionData.offices.map((office, index) => (
              <li key={index}>{office}</li>
            ))}
          </ul>
        </section>

        <section className="registration-deadline">
          <h2>Voter Registration Deadline</h2>
          <p>
            Make sure you’re registered to vote before the deadline: <strong>{electionData.registrationDeadline}</strong>.
          </p>
        </section>

        <section className="resources">
          <h2>Helpful Resources</h2>
          <ul>
            {electionData.resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UpcomingElection;
