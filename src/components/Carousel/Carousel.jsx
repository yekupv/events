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
		// autoplay: true,
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
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
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
					<img src={images.image_carousel_1} alt="slider image 2" />
				</div>
				<div className="box">
					<img src={images.image_carousel_2} alt="slider image 3" />
				</div>
				<div className="box">
					<img src={images.image_carousel_3} alt="slider image 4" />
				</div>

				<div className="box">
					<img
						src={images.image_carousel_5}
						loading="lazy"
						alt="slider image 6"
					/>
				</div>
				<div className="box">
					<img
						src={images.image_carousel_6}
						loading="lazy"
						alt="slider image 7"
					/>
				</div>
				<div className="box">
					<img
						src={images.image_carousel_7}
						loading="lazy"
						alt="slider image 8"
					/>
				</div>
				<div className="box">
					<img
						src={images.image_carousel_4}
						loading="lazy"
						alt="slider image 5"
					/>
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
