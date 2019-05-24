import React from "react";
import { Tag } from "antd";
import { TitleBlock } from "../components";

const skill = ["Html5", "Css3", "Scss", "Es5", "Es6", "Npm", "React", "Redux", "Webpack", "Git", "Agile", "Adobe Photoshop"]

function Skills() {
  return (
    <div className="skills mb-30">
      <TitleBlock title="Skills" />
      {skill.map(skill => {
        return (
          <Tag className="skill-tag">{skill}</Tag>
        )
      })}
    </div>
  );
}

export default Skills;
