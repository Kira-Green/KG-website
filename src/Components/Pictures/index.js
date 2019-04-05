import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Pictures extends Component {
	render() {
		return (
			<Carousel autoPlay showThumbs showArrows infiniteLoop>
				<div>
					<img src="https://picsum.photos/300/150/?random&nothing6"  alt='nice '/>
					<p className="legend">Legend 1</p>
				</div>
				<div>
					<img src="https://picsum.photos/300/150/?random&nothing7" />
					<p className="legend">Legend 2</p>
				</div>
				<div>
					<img src="../../../public/Images/bikes.png" />
					<p className="legend">Bikes</p>
				</div>
				<div>
					<img src="../../../public/Images/DSC02771.png" />
					<p className="legend">French Alps</p>
				</div>
			</Carousel>
		);
	}
}

export default Pictures;
