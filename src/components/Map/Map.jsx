import React from "react";
import "./Map.scss";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { mapOptions } from "./MapConfiguration";
import images from "../../assets/images/images";
const Map = ({ isLoaded }) => {
	const containerStyle = {
		width: "1070px",
		height: "684px",
	};
	const center = {
		lat: 43.238949,
		lng: 76.889709,
	};
	const position = {
		lat: 43.251153,
		lng: 76.9097,
	};
	return isLoaded ? (
		<div className='map'>
			<h2>
				Где <span>это?</span>
			</h2>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={12}
			>
				<Marker position={position} />
			</GoogleMap>
		</div>
	) : (
		<>kekw</>
	);
};

export default Map;
