import React from "react";
import Header from "../../components/Header/Header";
import InfoLine from "../../components/infoLine/infoLine";
import VideoBlock from "../../components/VideoBlock/VideoBlock";
import Carousel from "../../components/Carousel/Carousel";
import Events from "../../components/Events/Events";
import Merch from "../../components/Merch/Merch";
import Map from "../../components/Map/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "../../components/Map/MapConfiguration";
import "./Main.scss";
const Main = () => {
	const { isLoaded } = useJsApiLoader({
		id: mapOptions.googleMapApiKey,
		googleMapsApiKey: mapOptions.googleMapApiKey,
	});
	return (
		<div className='main'>
			<InfoLine />
			<VideoBlock />
			<Carousel />
			<Events />
			<Merch />
			<Map isLoaded={isLoaded} />
		</div>
	);
};
export default Main;
