import React from "react";
import Pictures from "../Components/Pictures";

export default function Picturesection({ title, subtitle, dark, id }) {
	return (
		<div className={"section" + (dark ? " section-dark" : "")}>
			<div className="section-content" id={id}>
				<h1>{title}</h1>
				<Pictures />
			</div>
		</div>
	);
}
