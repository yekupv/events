import "./Events.scss";
import EventCard from "../EventCard/EventCard";
import Button from "../UI/Button/Button";
import images from "../../assets/images/images";
import { eventsInfo, eventsInfoMain } from "../../helpers/events";
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
				{eventsInfoMain.map((event) => (
					<EventCard
						key={event.id}
						image={event.img}
						name={event.name}
						variant="medium"
						parent="main"
					/>
				))}
			</div>
			<Button
				onClick={() => navigate("/events")}
				variant="secondary"
				active={true}
				orWhat
			>
				Все мероприятия
			</Button>
		</div>
	);
};

export default Events;
