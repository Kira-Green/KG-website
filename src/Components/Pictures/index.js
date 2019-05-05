import React, { Component } from "react";
import css from "../Pictures/pictures.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bikes from "../../Images/bikes.jpg";
import FrenchAlps from "../../Images/FrenchAlps.jpg";
import FrenchAlps2 from "../../Images/frenchalps2.jpg";
import LakeLouise from "../../Images/lakeLousie.jpg";
import solarEclipse from "../../Images/solarLeaves.jpg";
import coigach from "../../Images/Coigach.jpg";
import familyHighlands from "../../Images/familyHighlands.jpg";
import grandCanyon from "../../Images/GrandCanyon.jpg";

import grandprismatic from "../../Images/GrandPrismatic.jpg";
import oldFaithful from "../../Images/OldFaithful.jpg";

class Pictures extends Component {
	render() {
		return (
			<Carousel autoPlay showThumbs showArrows infiniteLoop>
				<div>
					<img src={LakeLouise} alt="Lake Louise, Canada " />
					<p className={css.legend}>Lake Louise, Canada</p>
				</div>
				<div>
					<img src={oldFaithful} alt="Old Faithful Geyser, USA " />
					<p className={css.legend}>Old Faithful Geyser, USA</p>
				</div>
				<div>
					<img
						src={grandprismatic}
						alt="Grand Prismatic Spring, USA "
					/>
					<p className={css.legend}>Grand Prismatic Spring, USA</p>
				</div>
				
				<div>
					<img src={grandCanyon} alt="Grand Canyon, USA " />
					<p className={css.legend}>Grand Canyon, USA</p>
				</div>
				<div>
					<img src={coigach} alt="Coigach, Highlands " />
					<p className={css.legend}>Coigach, Highlands</p>
				</div>
				<div>
					<img src={familyHighlands} alt="family in the Highlands " />
					<p className={css.legend}>
						My family on holiday, Highlands
					</p>
				</div>
				<div>
					<img
						src={solarEclipse}
						alt="Solar Eclipse filtered through leaves of a tree"
					/>
					<p className={css.legend}>
						Solar Eclipse filtered through leaves of a tree
					</p>
				</div>
				<div>
					<img src={bikes} alt="three chiildren on bikes" />
					<p className={css.legend}>
						Me and my brothers on our bikes
					</p>
				</div>
				<div>
					<img src={FrenchAlps} alt="snowy moountain" />
					<p className={css.legend}>French Alps</p>
				</div>
				<div>
					<img src={FrenchAlps2} alt="view from a high mountain" />
					<p className={css.legend}>French Alps</p>
				</div>
			</Carousel>
		);
	}
}

export default Pictures;
