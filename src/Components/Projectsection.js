import React from "react";
import Projects from "../Components/Projects";

export default function Projectsection({ title, subtitle, dark, id }) {
	return (
		<div className='projectsection'>
			<div className="section-content" id={id}>
				<h1>{title}</h1>
				<Projects />
                
			</div>
		</div>
	);
}
