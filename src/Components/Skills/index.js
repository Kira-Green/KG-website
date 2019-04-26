import React, { Component } from "react";
import css from "./skills.module.css";
import cssIcon from "../../Images/css.svg";
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
				<img className={css.icons} src={css3Icon} />{" "}
			</div>
			<div className={css.html}>
				<img className={css.icons} src={htmlIcon} />
			</div>
			<div className={css.js}>
				<img className={css.icons} src={jsIcon} />
			</div>
			<div className={css.node}>
				<img className={css.icons} src={nodeIcon} />
			</div>
			<div className={css.react}>
				<img className={css.icons} src={reactIcon} />
			</div>
			<div className={css.express}>
				<img className={css.icons} src={expressIcon} />
			</div>
			<div className={css.git}>
				<img className={css.icons} src={gitIcon} />
			</div>
			<div className={css.github}>
				<img className={css.icons} src={githubIcon} />
			</div>
			<div className={css.mongo}>
				<img className={css.icons} src={mongoIcon} />
			</div>
		</div>
	);
};

export default Skills;
