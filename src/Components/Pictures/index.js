import React, { Component } from "react";
import css from '../Pictures/pictures.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bikes from "../../Images/bikes.jpg";
import FrenchAlps from '../../Images/FrenchAlps.jpg';
import FrenchAlps2 from '../../Images/French Alps2.jpg';
import LakeLouise from '../../Images/Lake Louise.JPG';
import solarEclipse from '../../Images/solar eclipse.JPG';


class Pictures extends Component {
	render() {
		return (
			<Carousel autoPlay showThumbs showArrows infiniteLoop>
				<div>
					<img src={LakeLouise}  alt='Lake Louise, Canada '/>
					<p className={css.legend}>Lake Louise, Canada</p>
				</div>
				<div>
					<img src={solarEclipse} alt='Solar Eclipse filtered through leaves of a tree' />
				<p className={css.legend}>Solar Eclipse filtered through leaves of a tree</p>
				</div>
				<div>
					<img src={bikes} alt='three chiildren on bikes'/>
					<p className={css.legend}>Me and my brothers on our bikes</p>
				</div>
				<div>
					<img src={FrenchAlps} alt='snowy moountain' />
					<p className={css.legend}>French Alps</p>
				</div>
				<div>
					<img src={FrenchAlps2} alt='view from a high mountain' />
					<p className={css.legend}>French Alps</p>
				</div>
			</Carousel>
		);
	}
}

export default Pictures;
