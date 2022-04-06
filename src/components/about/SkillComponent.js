import React from "react";

const SkillComponent = (props) => {
  return (
    <div className="skills-inner-wrapper">
      <div className="skill-name">{props.skill}</div>
      <div className="skill-level">
        <div class="w3-light-grey">
          <div class="w3-green" style={{ width: props.level, backgroundColor: props.color } }></div>
        </div>
      </div>
    </div>
  );
};

export default SkillComponent;
