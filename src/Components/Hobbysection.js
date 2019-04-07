import React from "react";
import Hobbies from "../Components/Hobbies";

export default function Hobbysection({ title, subtitle, dark, id }) {
	return (
		<div className="introsection">
			<div className="section-content" id={id}>
				<h1>{title}</h1>
				<Hobbies />
			</div>
		</div>
	);
}
