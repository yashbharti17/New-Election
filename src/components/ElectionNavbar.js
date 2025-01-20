import React from 'react';
import { Link } from 'react-router-dom';

const ElectionNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Election Infos</Link>
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
