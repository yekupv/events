import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import images from "../../assets/images/images";
import "./Carousel.scss";
const Carousel = () => {
	const slider = React.useRef(null);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 4000,
	};
	return (
		<div className='carousel'>
			<button onClick={() => slider?.current?.slickPrev()}>Prev</button>
			<button onClick={() => slider?.current?.slickNext()}>Next</button>
			<Slider ref={slider} {...settings}>
				<div className='box'>
					<h3>slider1</h3>
				</div>
				<div className='box'>
					<h3>slider1</h3>
				</div>
				<div className='box'>
					<h3>slider1</h3>
				</div>
				<div className='box'>
					<h3>slider1</h3>
				</div>
			</Slider>
		</div>
	);
};

export default Carousel;
