import React from "react";
import "./EventCard.scss";
import Button from "../UI/Button/Button";
const EventCard = ({ date, time, location, price, name, image, variant }) => {
	return (
		<div
			className={`event-card ${variant}`}
			// style={{
			// 	background: ` url(${image})`,
			// 	backgroundPosition: "center",
			// }}
		>
			<div className='event-card__info'>
				<p>{date}</p>
				<p>{time}</p>
				<p>{location}</p>
				<p>{price}</p>
			</div>
			<div className='event-card__info'>
				<h3>{name}</h3>
				<Button variant='secondary'>Билеты</Button>
			</div>
			<img className='event-card__bg-image'src={image} alt="cardImage" />
		</div>
	);
};

export default EventCard;
