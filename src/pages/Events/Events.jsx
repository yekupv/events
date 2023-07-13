import React, { useEffect, useState } from "react";
import "./Events.scss";
import Button from "../../components/UI/Button/Button";
import { eventsInfo } from "../../helpers/events";
import EventCard from "../../components/EventCard/EventCard";
const Events = () => {
	const [filteredEventsInfo, setFilteredEventsInfo] = useState(eventsInfo);
	const filterEvents = (e) => {
		setFilteredEventsInfo(
			eventsInfo.filter((event) => event.date == e.target.innerText)
		);
		console.log(e.target.innerText);
		console.log(filteredEventsInfo);
	};
	return (
		<main className='events-page'>
			<h1>
				<span>Все мероприятия</span> <br /> с 9 по 11 сентября
			</h1>

			<div className='events-page__dates'>
				{eventsInfo.map((event, index) => (
					<Button key={event.name + index} onClick={filterEvents}>
						{event.date}
					</Button>
				))}
			</div>

			<div className='events__cards'>
				{filteredEventsInfo.map((event) => (
					<EventCard
						key={event.name}
						date={event.date}
						time={event.time}
						location={event.location}
						price={event.price}
						name={event.name}
						image={event.image}
						variant={"large"}
					/>
				))}
			</div>
		</main>
	);
};

export default Events;
