import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const Badge = styled.span`
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;
  /* Colors */
  background-color: ${({votes}) => 
  votes > 9 ? "rgba(0,100,0,0.3)" : "rgba(0, 0, 0, 0.3)"};
  color: #fff;
  /* Rounded border */
  border-radius: 9999px;
  height: 20px;
  width: 20px;
`;

function Skills({tech, votes}) {
  return (
    <li>
      {tech}
      <Badge className="votes">{votes}</Badge>
    </li>
  );
}

Skills.propTypes = {
  tech: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Skills;