import React from "react";
import images from "../../assets/images/images";
import "./Navbar.scss";
const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul className='navbar__socials'>
				<li className='navbar__socials-item'>
					<img src={images.instagram} alt='inst' />
				</li>
				<li className='navbar__socials-item'>
					<img src={images.telegram} alt='telegram' />
				</li>
				<li className='navbar__socials-item'>
					<img src={images.whatsapp} alt='whatsapp' />
				</li>
			</ul>
			<img className='navbar__logo' src={images.logo} alt='logo' />
			<div className='navbar__navlinks'>
				<p className='navbar__navlink'>О проекте</p>
				<a href=''>
					<img src={images.menu} alt='menu' />
				</a>
			</div>
		</nav>
	);
};
export default Navbar;
