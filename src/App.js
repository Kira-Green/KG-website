import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import Picturesection from "../src/Components/Picturesection";
import Introductionsection from "../src/Components/Introductionsection";
import Hobbysection from '../src/Components/Hobbysection';
import Educationsection from '../src/Components/Educationsection';
import Contactsection from '../src/Components/Contactsection';
import Projectsection from '../src/Components/Projectsection'
class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Introductionsection
					title="Profile"
					
					dark={true}
					id="section1"
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
					title="Education and Work Experience"
					subtitle={dummyText}
					dark={true}
					id="section4"
				/>
				<Projectsection
					title="Projects"
					subtitle={dummyText}
					dark={false}
					id="section6"
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
