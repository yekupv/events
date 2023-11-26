import Headroom from "react-headroom";
import images from "../../assets/images/images";
import "./Navbar.scss";
import { useState, useEffect } from "react";
import { useRef } from "react";
const Navbar = () => {
	const ref = useRef(null);
	const burgerRef = useRef(null);
	const links = [
		{ id: 1, link: "#about", text: "О проекте" },
		{ id: 2, link: "#events", text: "Мероприятия" },
		// { id: 3, link: "#merch", text: "Мерч" },
		{ id: 3, link: "#map", text: "Карта" },
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setToggle(false);
				setActiveIndex(0);
			}
		};

		if (toggle) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [toggle]);
	return (
		<Headroom>
			<nav className="navbar">
				<ul className="navbar__socials">
					<li className="navbar__socials-item">
						<a href="https://instagram.com/alemcomedyfest" target="_blank">
							<img src={images.instagram} alt="inst" />
						</a>
					</li>
					<li className="navbar__socials-item">
						<a href="https://t.me/AmaEugene" target="_blank">
							<img src={images.telegram} alt="telegram" />
						</a>
					</li>
					<li className="navbar__socials-item">
						<a href="https://wa.me/77028514301" target="_blank">
							<img src={images.whatsapp} alt="whatsapp" />
						</a>
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

				<div className="navbar__burger_menu">
					<div
						className="navbar__burger"
						ref={burgerRef}
						onClick={() => {
							setToggle((prevState) => !prevState); // Toggle the menu
						}}
					>
						<img src={images.menu} alt="menu" />
					</div>
					{toggle && (
						<div ref={ref} className="navbar__menu">
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
									<li key={link.id} className="navbar__menu_navlink">
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

							<div className="navbar__menu__footer">
								<a href="">Публичная офферта</a>
								<ul className="navbar__menu__footer__socials">
									<li className="navbar__menu__footer__socials-item">
										<a
											href="https://instagram.com/alemcomedyfest"
											target="_blank"
										>
											<img src={images.instagram} alt="inst" />
										</a>
									</li>
									<li className="navbar__menu__footer__socials-item">
										<a href="https://t.me/AmaEugene" target="_blank">
											<img src={images.telegram} alt="telegram" />
										</a>
									</li>
									<li className="navbar__menu__footer__socials-item">
										<a href="https://wa.me/77028514301" target="_blank">
											<img src={images.whatsapp} alt="whatsapp" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</nav>
		</Headroom>
	);
};
export default Navbar;
