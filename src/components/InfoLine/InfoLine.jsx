import "./InfoLine.scss";
import { eventsLength } from "../../helpers/events";

const InfoLine = () => {
	return (
		<div className="info-line">
			<h2>3 дня комедии · {eventsLength} мероприятий · 80+ комиков</h2>
		</div>
	);
};

export default InfoLine;
