import "./Events.scss";
import EventCard from "../EventCard/EventCard";
import Button from "../UI/Button/Button";
import images from "../../assets/images/images";
import { eventsInfo } from "../../helpers/events";
import { useNavigate } from "react-router-dom";
const Events = () => {
	const navigate = useNavigate();
	return (
		<div id="events" className="events">
			<h2>
				Что <span>будет</span>?
			</h2>
			<img className="bg_image" src={images.merchBg} alt="" />

			<div className="events__cards">
				{eventsInfo.map((event) => (
					<EventCard
						key={event.name}
						date={event.date}
						time={event.time}
						location={event.location}
						price={event.price}
						name={event.name}
						image={event.image}
						variant="medium"
					/>
				))}
			</div>
			<Button
				onClick={() => navigate("/events")}
				variant="secondary"
				active={true}
			>
				Все мероприятия
			</Button>
		</div>
	);
};

export default Events;
