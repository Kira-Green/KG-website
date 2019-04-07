import React from "react";
import Contact from "../Components/Contact";

export default function Contactsection({ title, subtitle, dark, id }) {
	return (
		<div className={"section" + (dark ? " section-dark" : "")}>
			<div className="section-content" id={id}>
				<h1>{title}</h1>
				<Contact />
			</div>
		</div>
	);
}
