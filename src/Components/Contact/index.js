import React, { Component } from "react";
import linkedin from "../../Images/linkedin.png";
import medium from "../../Images/medium.png";
import github from "../../Images/GitHub_Logo.png";
import css from "./contact.module.css";

const Contact = () => {
	return (
		<div className={css.contact}>
			{/* <p>Check out my blog on Medium and my work on GitHub. You can contact me via Linkedin or email.</p> */}
			<a href="https://medium.com/@kira.green" target="_blank">
				<img className={css.medium} src={medium} />
			</a>
			<br />
			<br />

			<a href="https://github.com/Kira-Green" target="_blank">
				<img className={css.github} src={github} />{" "}
			</a>

			<br />
			<br />

			<a
				href="https://www.linkedin.com/in/kira-green-70500b92/"
				target="_blank"
				className={css.linkedin}
			>
				<img src={linkedin} />{" "}
			</a>
			<br />
			<br />
			<div className={css.email}>
				Email me:{" "}
				<a href="mailto:kira.green@btinternet.com">
					kira.green@btinternet.com{" "}
				</a>{" "}
			</div>
		</div>
	);
};

export default Contact;
