import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome';
import { Element } from 'react-scroll';

class Skills extends Component {
  render() {
    const { skills } = this.props;
    return (
      <Element name="skills" className="element">
        <section className="section" id="skills">
          <h2 className="title">Skills</h2>
          <h3 className="subtitle">Some technologies I master and work with most of the time.</h3>
          <div className="skills">
            {skills.map(skill => (
              <div key={skill.sys.id} className="skill">
                <FontAwesomeIcon className="skill-icon" icon={['fab', skill.fields.icon]} />
                <h3 className="skill-title">{skill.fields.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </Element>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skills
});

export default  connect(mapStateToProps)(Skills);