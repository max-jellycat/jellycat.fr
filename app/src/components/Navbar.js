import React from 'react';
import JellycatDark from '../img/logo-jellycat-darkbg.png';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome';

const Navbar = () => (
  <nav className="navbar is-dark is-fixed-top">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src={JellycatDark} alt="Logo Jellycat Studio"/>
        </a>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a href="#" className="navbar-item">Skills</a>
          <a href="#" className="navbar-item">Projects</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="button is-primary" href="#">
                  <span className="icon">
                    <FontAwesomeIcon icon="envelope" />
                  </span>
                  <span>
                    Contact
                  </span>
                </a>
              </p>
              <p className="control">
                <a className="button is-info" href="https://www.linkedin.com/in/maxblanc/">
                  <span className="icon">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  </span>
                  <span>
                    LinkedIn
                  </span>
                </a>
              </p>
              <p className="control">
                <a className="button is-light" href="https://github.com/max-jellycat">
                  <span className="icon">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </span>
                  <span>GitHub</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar;