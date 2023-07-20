import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import images from "../../assets/images/images";
import "./Carousel.scss";
const Carousel = () => {
	const settings = {
		initialSlide: 0,
		dots: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		swipeToSlide: true,
		autoplaySpeed: 4000,
		nextArrow: <GalleryNextArrow />,
		prevArrow: <GalleryPrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="carousel">
			{/* <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
			<button onClick={() => slider?.current?.slickNext()}>Next</button> */}
			<Slider {...settings}>
				<div className="box">
					<h3>slider1</h3>
				</div>
				<div className="box">
					<h3>slider2</h3>
				</div>
				<div className="box">
					<h3>slider3</h3>
				</div>
				<div className="box">
					<h3>slider4</h3>
				</div>
				<div className="box">
					<h3>slider5</h3>
				</div>
			</Slider>
		</div>
	);
};

export default Carousel;

const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
	const { className, onClick } = props;

	return (
		<div {...props} className="custom-nextArrow" onClick={onClick}>
			<img src={images.nextArrow} alt="nextArrow" />
		</div>
	);
};

const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
	const { className, onClick } = props;

	return (
		<div {...props} className="custom-prevArrow" onClick={onClick}>
			<img src={images.prevArrow} alt="prevArrow" />
		</div>
	);
};
