import Button from "../UI/Button/Button";
import "./Header.scss";
import images from "../../assets/images/images";
import { useNavigate } from "react-router-dom";
const Header = () => {
	const navigate = useNavigate();
	return (
		<main>
			<div id="hero" className="hero">
				<figure className="hero__img4">
					<img
						src={images.backgroundImageMobile}
						width="auto"
						alt="backgroundImageMobile"
					/>
				</figure>
				<figure className="hero__img3">
					<img
						src={images.backgroundImageTablet}
						width="auto"
						alt="backgroundImageTablet"
					/>
				</figure>
				<div className="hero__info">
					<div className="hero__text">
						<h1>Ежегодный&nbsp; </h1>
						<span className="hero__text-dates">1-3 декабря</span>
					</div>
					<h1>
						<span className="hero__text--green">фестиваль комедии</span>
					</h1>
					<Button
						active={true}
						onClick={() => {
							navigate("/events");
						}}
					>
						<h4>К мероприятиям</h4>
					</Button>

					<figure className="hero__img1">
						<img src={images.arrows} alt="arrows" />
					</figure>
				</div>
			</div>
		</main>
	);
};

export default Header;
