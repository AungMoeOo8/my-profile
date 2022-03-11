import React from "react";
import Language from "./language";
import { Link } from "react-router-dom";

function Skills() {
  const languages = [
    { name: "Node", backgroundColor: "green", percent: 80 },
    { name: "Elixir", backgroundColor: "rgb(154, 65, 255)", percent: 50 },
    { name: "Php", backgroundColor: "purple", percent: 70 },
    { name: "Golang", backgroundColor: "blue", percent: 60 },
    { name: "Lua", backgroundColor: "violet", percent: 80 },
    { name: "Haxe", backgroundColor: "orange", percent: 40 },
  ];
  return (
    <div className="skills">
      <h3>My Skills</h3>
      <div className="languages_group">
        {languages.map((language, index) => (
          <Link key={index} to={'/langauges/' + language.name}>
            <Language
              language={language.name}
              bg={language.backgroundColor}
              percent={language.percent}
              delay={index + 1 - index * 0.6}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Skills;
