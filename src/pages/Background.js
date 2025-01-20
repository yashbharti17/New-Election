import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Background.css';

const Background = () => {
  return (
    <div className="us-elections">
    <div className="container mt-4">
      <h1 className="text-center mb-4">Background of US Elections</h1>

      {/* Introduction Section */}
      <section className="mb-5">
        <h2 className="text-primary">Introduction</h2>
        <p>
          Elections in the United States are a cornerstone of its democracy,
          serving as a mechanism for citizens to choose their representatives
          and shape the future of the country. From local councils to the
          presidency, elections enable the people to have a voice in governance
          at every level of the federal structure.
        </p>
      </section>

      {/* History Section */}
      <section className="mb-5">
        <h2 className="text-primary">History of US Elections</h2>
        <p>
          The history of elections in the U.S. dates back to 1789, when George
          Washington was elected as the first President. Over time, the
          electoral process has evolved significantly:
        </p>
        <ul>
          <li>1789: The first presidential election under the U.S. Constitution.</li>
          <li>
            1828: Introduction of mass participation with Andrew Jackson's
            campaign.
          </li>
          <li>1920: Women gained the right to vote with the 19th Amendment.</li>
          <li>1965: The Voting Rights Act eliminated racial discrimination in voting.</li>
        </ul>
      </section>

      {/* Election Process Section */}
      <section className="mb-5">
        <h2 className="text-primary">Election Process</h2>
        <p>
          The U.S. electoral process operates at multiple levels: local, state,
          and federal. Key components include:
        </p>
        <ul>
          <li>
            <strong>Primaries and Caucuses:</strong> Parties nominate their
            candidates through state-level contests.
          </li>
          <li>
            <strong>General Election:</strong> Held on the first Tuesday after
            the first Monday in November, where citizens cast their votes.
          </li>
          <li>
            <strong>Electoral College:</strong> A unique system where electors
            vote for the President based on state results.
          </li>
        </ul>
      </section>

      {/* Types of Elections Section */}
      <section className="mb-5">
        <h2 className="text-primary">Types of Elections</h2>
        <p>
          Elections in the U.S. are conducted at various levels and for
          different purposes:
        </p>
        <ul>
          <li>
            <strong>Federal Elections:</strong> Presidential, Senate, and House
            of Representatives elections.
          </li>
          <li>
            <strong>State Elections:</strong> Governors, state legislatures,
            and other state officials.
          </li>
          <li>
            <strong>Local Elections:</strong> Mayors, city councils, school
            boards, etc.
          </li>
          <li>
            <strong>Special Elections:</strong> For filling vacancies or
            referendums on specific issues.
          </li>
        </ul>
      </section>

      {/* Key Voting Rights Section */}
      <section className="mb-5">
        <h2 className="text-primary">Key Voting Rights and Milestones</h2>
        <p>
          The right to vote has expanded over time to include more groups of
          people. Major milestones include:
        </p>
        <ul>
          <li>15th Amendment (1870): Voting rights for African American men.</li>
          <li>19th Amendment (1920): Women's suffrage.</li>
          <li>26th Amendment (1971): Lowered the voting age to 18.</li>
        </ul>
      </section>

      {/* Challenges and Reforms Section */}
      <section className="mb-5">
        <h2 className="text-primary">Challenges and Recent Reforms</h2>
        <p>
          Despite its strengths, the U.S. electoral system faces challenges
          including:
        </p>
        <ul>
          <li>Gerrymandering and unequal representation.</li>
          <li>Voter suppression concerns.</li>
          <li>Debates over mail-in and early voting accessibility.</li>
        </ul>
        <p>
          Recent reforms, such as expanding early voting and introducing ranked
          choice voting in some states, aim to make the system more inclusive
          and efficient.
        </p>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-primary">Conclusion</h2>
        <p>
          U.S. elections are a vital part of the nation's identity, enabling
          citizens to influence policies and leadership. As the system evolves,
          it continues to reflect the dynamic nature of American democracy.
        </p>
      </section>
    </div>
    </div>
  );
};

export default Background;
