import Button from "../UI/Button/Button";
import "./Header.scss";
import images from "../../assets/images/images";
import { useNavigate } from "react-router-dom";
const Header = () => {
	const navigate = useNavigate();
	return (
		<main>
			<div className="hero">
				<div className="hero__info">
					<div className="hero__text">
						<h1>Крупнейший&nbsp; </h1>
						<span className="hero__text-dates">
							с 30 вагуста <br />
							по 3 сентрября
						</span>
					</div>
					<h1>
						<span className="hero__text--green">фестиваль комедии</span>
						<br /> в Центральной Азии
					</h1>
					<Button
						onClick={() => {
							navigate("/events");
						}}
					>
						<h4>К мероприятиям</h4>
					</Button>

					<figure className="hero__img1">
						<img src={images.arrows} alt="arrows" />
					</figure>
					<figure className="hero__img2">
						<img src={images.mainImage} alt="mainImage" />
					</figure>
					<figure className="hero__img3">
						<img src={images.mobileArrows} alt="mobileArrows" />
					</figure>
				</div>
			</div>
		</main>
	);
};

export default Header;
