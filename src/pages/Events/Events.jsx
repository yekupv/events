import { useState } from "react";
import "./Events.scss";
import Button from "../../components/UI/Button/Button";
import { eventsInfo, eventsDatesArray } from "../../helpers/events";
import EventCard from "../../components/EventCard/EventCard";
import BackButton from "../../components/UI/BackButton/BackButton";
import { useNavigate } from "react-router-dom";
const Events = () => {
	const nav = useNavigate();
	const [filteredEventsInfo, setFilteredEventsInfo] = useState(eventsInfo);
	const [activeIndex, setActiveIndex] = useState("");
	const filterEvents = (e, date) => {
		setActiveIndex(date);

		setFilteredEventsInfo(
			eventsInfo.filter((event) => {
				return event.date == e.target.innerText;
			})
		);
		console.log(activeIndex);
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
					<span>Все мероприятия</span> <br /> с 1 по 3 декабря
				</h1>

				<div className="events-page__dates">
					{eventsDatesArray.map((date, index) => (
						<Button
							key={date}
							onClick={(e) => filterEvents(e, date)}
							variant="secondary"
							active={activeIndex === 0 || activeIndex === date} // Pass the active state based on the condition
						>
							{date}
						</Button>
					))}
				</div>

				<div className="events__cards margin">
					{filteredEventsInfo.map((event) => (
						<EventCard
							key={event.id}
							date={event.date}
							time={event.time}
							location={event.location}
							price={event.price}
							name={event.name}
							image={event.img}
							variant={"large"}
						/>
					))}
				</div>
			</div>
		</main>
	);
};

export default Events;
