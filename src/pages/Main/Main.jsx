import React from "react";
import Header from "../../components/Header/Header";

import "./Main.scss";
import Widgets from "../../components/Widgets/Widgets";
import InfoLine from "../../components/infoLine/infoLine";
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
