import React from 'react';
import { Link } from 'react-router-dom';
import './ElectionNavbar.css'; // Import the CSS file for styling

const ElectionNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src='../img/einfo.png' alt="Election Infos Logo" className="navbar-logo" />
          Election Infos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/ideal">Ideal</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/background">Background</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upcoming-election">Upcoming Elections</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/betting-market">Betting Market</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/data-sources">Data Sources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/model">Model</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/forecasting">Forecasting</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ElectionNavbar;
