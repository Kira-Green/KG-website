import React from "react";
import Skills from './Skills'

export default function Skillssection({ title, subtitle, dark, id }) {
	return (
		<div className='skillssection'>
			<div className="section-content" id={id}>
				<h1 >{title}</h1>
				<Skills />
                
			</div>
		</div>
	);
}
