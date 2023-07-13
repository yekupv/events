import React from "react";
import Button from "../UI/Button/Button";
import "./Header.scss";
import images from "../../assets/images/images";
import { useNavigate } from "react-router-dom";
const Header = () => {
	const navigate = useNavigate();
	return (
		<main>
			<div className='hero'>
				<div className='hero__text'>
					<h1>Крупнейший&nbsp; </h1>
					<span className='hero__text-dates'>9-11 сентября</span>
				</div>
				<h1>
					<span className='hero__text--green'>фестиваль комедии</span>
					<br /> в Центральной Азии
				</h1>
				<Button
					style={{ padding: 30 }}
					onClick={() => {
						navigate("/events");
					}}
				>
					<h4>К мероприятиям</h4>
				</Button>
			</div>
			<figure className='hero__img1'>
				<img src={images.arrows} alt='arrows' />
			</figure>
			<figure className='hero__img2'>
				<img src={images.mainImage} alt='mainImage' />
			</figure>
		</main>
	);
};

export default Header;
