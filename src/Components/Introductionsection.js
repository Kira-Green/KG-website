import React from "react";
import Introduction from "../Components/Introduction";
import Home from "../Components/Home";

export default function Introductionsection({ title, subtitle, dark, id }) {
	return (
			<div className="introsection" id={id}>
			{/* <div className="section-content" id={id}>
				<h1 className="home-name">{title}</h1>
				<Home />
			</div> */}
			<div className='homeText'>
			<div className='homeName'>Kira Green</div>
			<div className='homeJob'>Web Developer </div>
			</div>
			<p>Photo: Solar Eclipse, Oregon 21 August 2017 Kira Green</p>
		</div>
	);
}
