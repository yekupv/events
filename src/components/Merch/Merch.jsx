import React from "react";
import images from "../../assets/images/images";
import "./Merch.scss";
import Button from "../UI/Button/Button";
const Merch = () => {
	return (
		<section className='merch'>
			<div className='merch__header'>
				<h2>МЕРЧ!</h2>
				<img src={images.merch} alt='merch' />
			</div>
			<div className='merch__row'>
				<div className='merch__block'></div>
				
			</div>
			<Button variant={'secondary'}>Заказать</Button>
		</section>
	);
};

export default Merch;
