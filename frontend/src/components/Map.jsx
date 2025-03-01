/* eslint-disable react/prop-types */
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";

const customIcon = new Icon({
  iconUrl: "../../location.png", // Provide the path to your custom icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Map = ({ latAndLong, zoom }) => {
  const mapKey = latAndLong ? `${latAndLong[0]}-${latAndLong[1]}` : "default";

  const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  // Set default Kathmandu coordinates if latAndLong is not passed
  const defaultLocation = [27.7172, 85.3240]; // Coordinates for Kathmandu

  return (
    <MapContainer
      key={mapKey}
      center={latAndLong.length !== 0 ? latAndLong : defaultLocation}
      zoom={zoom ? zoom : 13} // Zoom level adjusted to Kathmandu
      scrollWheelZoom={false}
      className="w-full rounded-lg h-full"
    >
      <TileLayer url={url} attribution={attribution} />
      <Marker
        position={latAndLong.length !== 0 ? latAndLong : defaultLocation}
        icon={customIcon}
      >
        <Popup>
          <b>Kathmandu</b><br />
          The capital city of Nepal.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
