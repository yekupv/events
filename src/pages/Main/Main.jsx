import Header from "../../components/Header/Header";
import images from "../../assets/images/images";
import "./Main.scss";
import Widgets from "../../components/Widgets/Widgets";
import InfoLine from "../../components/InfoLine/InfoLine";
const Main = () => {
	return (
		<main className="main">
			<figure className="hero__img2">
				<img src={images.mainImage} alt="mainImage" />
			</figure>
			<figure className="hero__img--main">
				<img src={images.backgroundMain} alt="mainImage" />
			</figure>
			<Header />
			<InfoLine />
			<Widgets />
		</main>
	);
};
export default Main;
