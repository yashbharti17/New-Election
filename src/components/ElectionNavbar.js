import React from 'react';

const ElectionNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">Election Infos</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#step_one"> Primaries</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#step_two">Conventions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#step_three">General Election</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#step_four"> Electoral College</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#inaugration">Inauguration</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ElectionNavbar;
