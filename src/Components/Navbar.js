import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import Sax from '../Images/saxophone-72-312.png';

export default class Navbar extends Component {
	scrollToTop = () => {
		scroll.scrollToTop();
	};

	 classToggle =()=> {
		 console.log('in classtoggle')
		const navs = document.querySelectorAll('.nav-items')
		
		navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
	  }
	  

	render() {
		return (
			<nav className="nav" id="navbar">
			
				<div className="nav-content">
				
					<img
						src={Sax}
						className="nav-logo"
						alt="Logo"
						onClick={this.scrollToTop}
					/>
					<h1>Kira Green</h1>
					<nav className="nav-items">
						<li className="nav-item">
							<Link
								activeClass="active"
								to="section1"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Profile
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="section2"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Photos
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="section3"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Hobbies
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="section4"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Experience
							</Link>
						</li>
						<li className="nav-item">
							<Link
								activeClass="active"
								to="section5"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Links 
							</Link>
						</li>
					</nav>
				</div>
			</nav>
		);
	}
}
