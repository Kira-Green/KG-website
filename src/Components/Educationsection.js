import React from "react";
import Education from "../Components/Education";

export default function Educationsection({ title, subtitle, dark, id }) {
	return (
		<div className={"section" + (dark ? " section-dark" : "")}>
			<div className="section-content" id={id}>
				<h1>{title}</h1>
				<Education />
			</div>
		</div>
	);
}
