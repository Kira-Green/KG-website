import React from "react";
import Introduction from "../Components/Introduction";

export default function Introductionsection({ title, subtitle, dark, id }) {
	return (
		<div className='introsection'>
			<div className="section-content" id={id}>
				<h1>{title}</h1>
				<Introduction />
                
			</div>
		</div>
	);
}
