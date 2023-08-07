import "./Map.scss";
import { GoogleMap, Marker } from "@react-google-maps/api";
import images from "../../assets/images/images";
const Map = ({ isLoaded }) => {
	const center = {
		lat: 43.238949,
		lng: 76.889709,
	};
	const position = {
		lat: 43.251153,
		lng: 76.9097,
	};

	return (
		isLoaded && (
			<div id="map" className="map">
				<h2>
					Где <span>это?</span>
				</h2>
				<GoogleMap
					mapContainerClassName="map-container"
					center={center}
					zoom={12}
				>
					<Marker icon={images.marker} position={position} />
					<Marker icon={images.marker} position={center} />
				</GoogleMap>
			</div>
		)
	);
};

export default Map;
