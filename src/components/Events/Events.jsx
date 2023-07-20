import React from "react";
import "./Events.scss";
import EventCard from "../EventCard/EventCard";
import images from "../../assets/images/images";
import Button from "../UI/Button/Button";
import { eventsInfo } from "../../helpers/events";
import { useNavigate } from "react-router-dom";
const Events = () => {
	const navigate = useNavigate();
	return (
		<div className='events'>
			<h2>
				Что <span>будет</span>?
			</h2>
			<div className='events__cards'>
				{eventsInfo.map((event) => (
					<EventCard
						key={event.name}
						date={event.date}
						time={event.time}
						location={event.location}
						price={event.price}
						name={event.name}
						image={event.image}
						variant='medium'
					/>
				))}
			</div>
			<Button onClick={() => navigate("/events") }variant='secondary'>Все мероприятия</Button>
		</div>
	);
};

export default Events;
