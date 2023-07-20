import React, { useEffect, useState } from "react";
import "./Events.scss";
import Button from "../../components/UI/Button/Button";
import { eventsInfo } from "../../helpers/events";
import EventCard from "../../components/EventCard/EventCard";
import BackButton from "../../components/UI/BackButton/BackButton";
import images from "../../assets/images/images";
import { useNavigate } from "react-router-dom";
const Events = () => {
	const nav = useNavigate();
	const [filteredEventsInfo, setFilteredEventsInfo] = useState(eventsInfo);
	const filterEvents = (e) => {
		setFilteredEventsInfo(
			eventsInfo.filter((event) => event.date == e.target.innerText)
		);
		console.log(e.target.innerText);
		console.log(filteredEventsInfo);
	};
	return (
		<main className="events-page">
			<div className="events-page__wrapper">
				<div className="events-page__back-button">
					<BackButton
						onClick={() => {
							nav("/");
						}}
					>
						На главную
					</BackButton>
				</div>
				<h1>
					<span>Все мероприятия</span> <br /> с 30 августа <br />
					по 3 сентября
				</h1>

				<div className="events-page__dates">
					{eventsInfo.map((event, index) => (
						<Button
							key={event.name + index}
							onClick={filterEvents}
							variant="secondary"
						>
							{event.date}
						</Button>
					))}
				</div>

				<div className="events__cards margin">
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
			</div>
		</main>
	);
};

export default Events;
