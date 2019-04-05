import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Pictures extends Component {
	render() {
		return (
			<Carousel autoPlay sho>
				<div>
					<img src="https://picsum.photos/300/150/?random&nothing6" />
					<p className="legend">Legend 1</p>
				</div>
				<div>
					<img src="https://picsum.photos/300/150/?random&nothing7" />
					<p className="legend">Legend 2</p>
				</div>
				<div>
					<img src="https://picsum.photos/300/150/?random&nothing8" />
					<p className="legend">Legend 3</p>
				</div>
			</Carousel>
		);
	}
}

export default Pictures;
