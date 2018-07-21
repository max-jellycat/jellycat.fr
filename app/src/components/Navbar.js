import React, { Component } from 'react';
import { connect } from 'react-redux';
import JellycatDark from '../img/logo-jellycat-darkbg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeHash } from 'react-scrollable-anchor';

class Navbar extends Component {
  render() {
    const { socials } = this.props;

    return (
      <nav className="navbar is-dark is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <a href="#hero-anchor" className="navbar-item" onClick={() => removeHash()}>
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
              <a href="#skills-anchor" className="navbar-item" onClick={() => removeHash()}>Skills</a>
              <a href="#" className="navbar-item">Projects</a>
            </div>
            <div className="navbar-end">
              {socials.map(social => (
                <a key={social.sys.id} href={social.fields.link} target="_blank" className="navbar-item">
                  <span className="icon">
                    <FontAwesomeIcon icon={['fab', social.fields.icon]} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  socials: state.socials
});

export default connect(mapStateToProps)(Navbar);