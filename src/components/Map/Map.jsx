import "./Map.scss";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import images from "../../assets/images/images";
import { eventsInfo } from "../../helpers/events";
import { useState } from "react";
const Map = ({ isLoaded }) => {
	const [selectedMarker, setSetselectedMarker] = useState("");
	const center = {
		lat: 43.238949,
		lng: 76.889709,
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
					{eventsInfo.map((event) => (
						<Marker
							key={event.id}
							icon={images.marker}
							position={event.position}
							onClick={() => setSetselectedMarker(event)}
						/>
					))}

					{selectedMarker && (
						<InfoWindow
							position={selectedMarker.position}
							onCloseClick={() => setSetselectedMarker("")}
						>
							<div className="map__infowindow">
								<h1>{selectedMarker.name}</h1>
								<h1>{selectedMarker.date}</h1>
								<h1>{selectedMarker.time}</h1>
							</div>
						</InfoWindow>
					)}
				</GoogleMap>
			</div>
		)
	);
};

export default Map;
