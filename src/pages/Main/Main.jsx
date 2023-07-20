import React from "react";
import Header from "../../components/Header/Header";
import InfoLine from "../../components/infoLine/infoLine";

import "./Main.scss";
import Widgets from "../../components/Widgets/Widgets";
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
