import React from 'react';
import JellycatLogo from '../img/logo-jellycat-darkbg.png';

const Hero = () => (
  <div className="hero" id="hero">
    <div className="container">
      <div className="columns">
        <div className="column is-two-thirds" id="hero-text">
          <img src={JellycatLogo} alt=""/>
          <h1 className="title">Need help in web development?</h1>
          <h2 className="subtitle">Fitted for every challenge, Jellycat always falls on his paws !</h2>
        </div>

        <div className="column is-one-third">
          <div className="box">
            <h3>Need help ? Leave me a message !</h3>
            <form className="form">
              <div className="field">
                <div className="control">
                  <input className="input" type="text" placeholder="Name" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input" type="email" placeholder="Email address" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea className="textarea" type="email" placeholder="Message" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-primary is-medium is-fullwidth">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;