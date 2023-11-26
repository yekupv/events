import "./Map.scss";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import images from "../../assets/images/images";
import { eventsInfo, eventsByAddress } from "../../helpers/events";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// ... (your existing imports)
const Map = ({ isLoaded }) => {
	const navigate = useNavigate();

	const [selectedMarker, setSelectedMarker] = useState("");
	const center = {
		lat: 43.238949,
		lng: 76.889709,
	};

	const handleEventClick = (eventId) => {
		navigate("/events");
		// Scroll to the element with the provided event ID

		// If you want to scroll immediately after the navigation, you can use a small delay
		setTimeout(() => {
			const targetElement = document.getElementById(eventId);
			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: "smooth",
				});
			}
		}, 100);
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
					{eventsByAddress.map((event) => (
						<Marker
							key={event.id}
							icon={images.marker}
							position={{ lat: event.lat, lng: event.lng }}
							onClick={() => setSelectedMarker(event)}
						/>
					))}

					{selectedMarker && (
						<InfoWindow
							position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
							onCloseClick={() => setSelectedMarker("")}
						>
							<div className="map__infowindow">
								<h1>{selectedMarker.events[0].location}</h1>
								<h2>{selectedMarker.address}</h2>
								{selectedMarker.events.map((event) => (
									// Use onClick to handle the scroll to the target element
									<div
										className={"map__infowindow-list_element"}
										key={event.id}
										onClick={() => handleEventClick(event.id)}
									>
										<h4>{event.name}</h4>
									</div>
								))}
							</div>
						</InfoWindow>
					)}
				</GoogleMap>
			</div>
		)
	);
};

export default Map;
