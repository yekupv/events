import "./Widgets.scss";
import { useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "../Map/MapConfiguration";
import VideoBlock from "../../components/VideoBlock/VideoBlock";
import Carousel from "../../components/Carousel/Carousel";
import Events from "../../components/Events/Events";
import Merch from "../../components/Merch/Merch";
import Map from "../../components/Map/Map";

const Widgets = () => {
	const { isLoaded } = useJsApiLoader({
		id: mapOptions.googleMapApiKey,
		googleMapsApiKey: mapOptions.googleMapApiKey,
	});
	return (
		<div className="widgets">
			<VideoBlock />
			<Carousel />
			<Events />
			{/* <Merch /> */}
			<Map isLoaded={isLoaded} />
		</div>
	);
};

export default Widgets;
