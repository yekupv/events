import Header from "../../components/Header/Header";

import "./Main.scss";
import Widgets from "../../components/Widgets/Widgets";
import InfoLine from "../../components/InfoLine/InfoLine";
const Main = () => {
	return (
		<main className="main">
			<Header />
			<InfoLine />
			<Widgets />
		</main>
	);
};
export default Main;
