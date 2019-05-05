import React, { Component } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import Picturesection from "../src/Components/Picturesection";
import Introductionsection from "../src/Components/Introductionsection";
import Hobbysection from "../src/Components/Hobbysection";
import Educationsection from "../src/Components/Educationsection";
import Contactsection from "../src/Components/Contactsection";
import Projectsection from "../src/Components/Projectsection";
import Skillssection from "../src/Components/Skillssection";
class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Introductionsection
					title="Kira Green"
					dark={true}
					id="section1"
				/>
				<Skillssection
					title="Skills"
					subtitle={dummyText}
					dark={true}
					id="section7"
				/>
				<Projectsection
					title="Projects"
					subtitle={dummyText}
					dark={false}
					id="section6"
				/>
				<Picturesection
					title="Photos"
					subtitle={dummyText}
					dark={true}
					id="section2"
				/>

				<Hobbysection
					title="Hobbies"
					subtitle={dummyText}
					dark={true}
					id="section3"
				/>
				<Educationsection
					title="Experience"
					subtitle={dummyText}
					dark={true}
					id="section4"
				/>

				<Contactsection
					title="Links and Contact Info"
					subtitle={dummyText}
					dark={false}
					id="section5"
				/>
			</div>
		);
	}
}

export default App;
