import React from "react";
import Proptypes from "prop-types";
import Skills from "./Skills";

import blank_profile from "./blank-profile-picture-female.png";


function Wilder({name, resume}) {
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <p>
        {resume}
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        <Skills tech="HTML" votes="3" />
        <Skills tech="VUE" votes="3" />
        <Skills tech="REACT" votes="3" />
        <Skills tech="CSS" votes="3" />
        <Skills tech="TYPESCRIPT" votes="3" />
      </ul>
    </article>
  );
}

Wilder.propTypes = {
  name: Proptypes.string.isRequired,
  resume: Proptypes.string.isRequired,
};

export default Wilder;