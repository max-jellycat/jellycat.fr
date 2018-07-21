import React, { Component } from 'react';
import { connect } from 'react-redux';
import JellycatDark from '../img/logo-jellycat-darkbg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { Link, scrollSpy } from 'react-scroll';

class Navbar extends Component {

  state = {
    menuActive: false
  }

  componentDidMount() {
    scrollSpy.update();
  }

  handleMenu = () => () => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive
    }));
  }

  render() {
    const { socials } = this.props;

    return (
      <nav className="navbar is-dark is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link to="hero" spy={true} smooth={true} duration={300} className="navbar-item">
              <img src={JellycatDark} alt="Logo Jellycat Studio"/>
            </Link>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={this.handleMenu()}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={classnames('navbar-menu', { 'is-active': this.state.menuActive })}>
            <div className="navbar-start">
              <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={300} className="navbar-item">Skills</Link>
              <Link activeClass="active" to="#" spy={true} smooth={true} offset={50} duration={300} className="navbar-item">Projects</Link>
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