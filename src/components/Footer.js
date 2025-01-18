import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About This Site</h5>
            <p>
              This website provides an interactive guide to the U.S. election process. Explore the steps and understand the journey to the White House.
            </p>
          </div>
          <div className="col-md-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#step_one" className="text-white text-decoration-none">Primaries and Caucuses</a></li>
              <li><a href="#step_two" className="text-white text-decoration-none">National Conventions</a></li>
              <li><a href="#step_three" className="text-white text-decoration-none">General Election</a></li>
              <li><a href="#step_four" className="text-white text-decoration-none">Electoral College</a></li>
              <li><a href="#inaugration" className="text-white text-decoration-none">Inauguration</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-0">© {new Date().getFullYear()} Election Guide. All rights reserved.</p>
          <p>
            Made with ❤️ using React and Bootstrap.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
