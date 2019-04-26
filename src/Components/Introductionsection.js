import React from "react";
import Introduction from "../Components/Introduction";
import Home from "../Components/Home";

export default function Introductionsection({ title, subtitle, dark, id }) {
	return (
		<div className="introsection" id={id}>
			<div className="homeName">Kira Green</div>
			<div className="homeJob">Web Developer </div>
			<p className="photocredit">
				Photo: Solar Eclipse, Oregon 21 August 2017 Kira Green
			</p>
		</div>
	);
}
