import "./EventCard.scss";
import Button from "../UI/Button/Button";
import images from "../../assets/images/images";
const EventCard = ({ date, time, location, price, name, image, variant }) => {
	return (
		<div
			className={`event-card ${variant}`}
			// style={{
			// 	background: ` url(${image})`,
			// 	backgroundPosition: "center",
			// }}
		>
			<div className={`event-card__info `}>
				<p>{date}</p>
				<img src={images.star} alt="star" />
				<p>{time}</p>
				<img src={images.star} alt="star" />
				<p>{location}</p>
				<img src={images.star} alt="star" />
				<p>{price}</p>
			</div>
			<div className="event-card__title">
				<h3>{name}</h3>
				<Button variant="secondary" active={true}>
					Билеты
				</Button>
			</div>
			<img className="event-card__bg-image" src={image} alt="cardImage" />
		</div>
	);
};

export default EventCard;
