import images from "../../assets/images/images";
import "./Merch.scss";
import Button from "../UI/Button/Button";
const Merch = () => {
	return (
		<section id="merch" className="merch">
			<div className="merch__header">
				<h2>МЕРЧ!</h2>
				<img src={images.merch} alt="merch" />
			</div>
			<img className="merch_bg_image" src={images.eventBg} alt="merchbg" />
			<div className="merch__row">
				<div className="merch__block"></div>
			</div>
			<Button variant={"secondary"} active={true}>
				Заказать
			</Button>
		</section>
	);
};

export default Merch;
