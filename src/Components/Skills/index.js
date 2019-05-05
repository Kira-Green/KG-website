import React, { Component } from "react";
import css from "./skills.module.css";

import htmlIcon from "../../Images/html.svg";
import jsIcon from "../../Images/javascript.svg";
import nodeIcon from "../../Images/node.svg";
import reactIcon from "../../Images/react.svg";
import expressIcon from "../../Images/expressjs-icon.svg";
import css3Icon from "../../Images/css3.svg";
import gitIcon from "../../Images/git.svg";
import githubIcon from "../../Images/github.svg";
import mongoIcon from "../../Images/mongodb.svg";

const Skills = () => {
	return (
		<div className={css.skills}>
			<div className={css.css3}>
				<img className={css.icons} src={css3Icon} alt='css3'/>{" "}
			</div>
			<div className={css.html}>
				<img className={css.icons} src={htmlIcon} alt='html'/>
			</div>
			<div className={css.js}>
				<img className={css.icons} src={jsIcon} alt='js'/>
			</div>
			<div className={css.node}>
				<img className={css.icons} src={nodeIcon} alt='node'/>
			</div>
			<div className={css.react}>
				<img className={css.icons} src={reactIcon} alt='react' />
			</div>
			<div className={css.express}>
				<img className={css.icons} src={expressIcon} alt='express'/>
			</div>
			<div className={css.git}>
				<img className={css.icons} src={gitIcon} alt='git' />
			</div>
			<div className={css.github}>
				<img className={css.icons} src={githubIcon} alt='github' />
			</div>
			<div className={css.mongo}>
				<img className={css.icons} src={mongoIcon}alt='mongo' />
			</div>
		</div>
	);
};

export default Skills;
