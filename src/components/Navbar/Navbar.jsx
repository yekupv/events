import Headroom from "react-headroom";
import images from "../../assets/images/images";
import "./Navbar.scss";
import { useState, useEffect } from "react";
const Navbar = () => {
	const links = [
		{ id: 1, link: "#about", text: "О проекте" },
		{ id: 2, link: "#events", text: "Мероприятия" },
		{ id: 3, link: "#merch", text: "Мерч" },
		{ id: 4, link: "#map", text: "Карта" },
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const [toggle, setToggle] = useState(false);
	useEffect(() => {
		if (toggle == true) document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [toggle]);
	return (
		<Headroom>
			<nav className="navbar">
				<ul className="navbar__socials">
					<li className="navbar__socials-item">
						<img src={images.instagram} alt="inst" />
					</li>
					<li className="navbar__socials-item">
						<img src={images.telegram} alt="telegram" />
					</li>
					<li className="navbar__socials-item">
						<img src={images.whatsapp} alt="whatsapp" />
					</li>
				</ul>
				<div className="navbar__navlinks">
					<a href="/#about" className="navbar__navlink">
						О проекте
					</a>
					<a href="/#events" className="navbar__navlink">
						Мероприятия
					</a>
					<a href="/#hero">
						<img className="navbar__logo" src={images.logo} alt="logo" />
					</a>
					<a href="/#merch" className="navbar__navlink">
						Мерч
					</a>
					<a href="/#map" className="navbar__navlink">
						Карта
					</a>
				</div>

				<div className="navbar__lang">Рус</div>
				<div className="navbar__burger_menu">
					<div
						className="navbar__burger"
						onClick={() => {
							setToggle(true);
						}}
					>
						<img src={images.menu} alt="menu" />
					</div>
					{toggle && (
						<div className="navbar__menu">
							<div
								className="navbar__menu_exit"
								onClick={() => {
									setToggle(false);
									setActiveIndex(0);
								}}
							>
								<img src={images.exit} alt="exit" />
							</div>
							<ul className="navbar__menu_navlinks">
								<a href="/#hero">
									<img className="navbar__logo" src={images.logo} alt="logo" />
								</a>
								{links.map((link) => (
									<li className="navbar__menu_navlink">
										<a
											href={`/${link.link}`}
											onClick={() => {
												setActiveIndex(link.id);
											}}
										>
											{link.text}
										</a>
										{activeIndex === link.id && (
											<img src={images.underline} alt="underline" />
										)}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</nav>
		</Headroom>
	);
};
export default Navbar;
