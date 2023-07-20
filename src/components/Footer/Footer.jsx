import images from "../../assets/images/images";
import "./Footer.scss";
const Footer = () => {
	return (
		<footer>
			<div className="copyright">
				<img src={images.logo} alt="logo" />

				<p>Все права защищены © 2023 </p>
			</div>
			<p>Публичная оферта</p>
		</footer>
	);
};

export default Footer;
