import "./EventCard.scss";
import Button from "../UI/Button/Button";
import images from "../../assets/images/images";
const EventCard = ({
	date,
	time,
	location,
	price,
	name,
	image,
	variant,
	link,
	...props
}) => {
	const fromParent = props.parent !== "main";
	const delight = props.parent !== "main" ? "delighting" : "name_positioning";
	return (
		<div
			id={props.id}
			className={`event-card ${variant} ${delight}`}
			// style={{
			// 	background: ` url(${image})`,
			// 	backgroundPosition: "center",
			// }}
		>
			{fromParent && (
				<div className={`event-card__info `}>
					<p>{date}</p>
					<img src={images.star} alt="star" />
					<p>{time}</p>
					<img src={images.star} alt="star" />
					<p>{location}</p>
					<img src={images.star} alt="star" />
					<p>{price}</p>
				</div>
			)}

			<div className="event-card__title">
				<h3>{name}</h3>
				{fromParent &&
					(link !== "" ? (
						<a href={link} target="_blank">
							<Button variant="secondary" active={true}>
								Билеты
							</Button>
						</a>
					) : (
						<Button variant="secondary" active={true} disabled={true}>
							Cкоро...
						</Button>
					))}
			</div>

			{image && (
				<img
					className="event-card__bg-image"
					src={image}
					loading={`${fromParent ? "lazy" : "eager"} `}
					alt="cardImage"
				/>
			)}
		</div>
	);
};

export default EventCard;
