import React, { useEffect, useState } from 'react';
import { GMap } from 'primereact/gmap';
import { Marker } from 'primereact/marker';
import { InfoWindow } from 'primereact/infowindow';
import axios from 'axios';

const MapComponent = () => {
	const [vendorLocations, setVendorLocations] = useState([]);
	const [userLocation, setUserLocation] = useState(null);
	const [selectedLocation, setSelectedLocation] = useState(null);

	useEffect(() => {
		// Fetch vendor locations from an API endpoint
		axios
			.get('https://api.example.com/vendor-locations')
			.then((response) => {
				setVendorLocations(response.data);
			})
			.catch((error) => {
				console.error('Error fetching vendor locations:', error);
			});

		// Get the user's current position using the browser's geolocation API
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setUserLocation({ lat: latitude, lng: longitude });
				},
				(error) => {
					console.error('Error getting user location:', error);
				}
			);
		}
	}, []);

	const handleMarkerClick = (location) => {
		setSelectedLocation(location);
	};

	return (
		<div className="map-container">
			<GMap
				style={{ width: '100%', height: '400px' }}
				zoom={10}
				center={userLocation}>
				{vendorLocations.map((location, index) => (
					<Marker
						key={index}
						position={location}
						onClick={() => handleMarkerClick(location)}
						icon="vendor-icon.png" // Specify the path to the vendor icon image
					/>
				))}

				{userLocation && (
					<Marker
						position={userLocation}
						icon="user-icon.png" // Specify the path to the user icon image
					/>
				)}

				{selectedLocation && (
					<InfoWindow
						position={selectedLocation}
						onClose={() => setSelectedLocation(null)}>
						<div>
							<h4>Vendor Location</h4>
							<p>{selectedLocation.address}</p>
						</div>
					</InfoWindow>
				)}
			</GMap>
		</div>
	);
};

export default MapComponent;
