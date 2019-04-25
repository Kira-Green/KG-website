import React, { Component } from "react";
import css from './skills.module.css'



const Skills = () => {
    return (
      <div className="skills">
         <h3>Technical Skills    </h3>
      <ul className={css.educationlist}>
          <li>    HTML</li>
          <li>    CSS</li>
          <li>    JavaScript</li>
          <li>    Node.js</li>
          <li>    React.js</li>
          <li>    Express.js</li>
          <li>    GitHub</li>
          <li>    Agile Development</li>
          <li>    ZenHub</li>
          <li>    MongoDB</li>
      </ul>
        
      </div>
    );
  };
  
  export default Skills;
  