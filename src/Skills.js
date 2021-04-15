import React from "react";
import Proptypes from "prop-types";

function Skills({tech, votes}) {
  return (
    <li>
      {tech}
      <span className="votes">{votes}</span>
    </li>
  );
}

Skills.propTypes = {
  tech: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Skills;