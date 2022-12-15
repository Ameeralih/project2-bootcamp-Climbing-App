import React from "react";
import "../App.css";
import { gymData } from "../gymdata";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoBox,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const libraries = ["places"];

const mapContainerStyle = {
  width: "95vw",
  height: "50vh",
};

const gymLocations = [[1.3122953786828546, 103.86319363195689]];

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
};

export function MapsAPI() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

export function Map() {
  const [selected, setSelected] = React.useState(null);

  const handleMarkerClick = (e) => {
    return (
      <div>
        Hello
        <InfoWindow position={{ lat: 1.3521, lng: 103.8198 }}>
          <div>Hello</div>
        </InfoWindow>
      </div>
    );
  };

  return (
    <GoogleMap
      zoom={11.5}
      center={{ lat: 1.3521, lng: 103.8198 }}
      mapContainerClassName="map-container"
      onClick={handleMarkerClick}
      mapContainerStyle={mapContainerStyle}
      options={options}
    >
      {gymData.map((gym) => (
        <Marker
          key={gym.name}
          position={{ lat: gym.latlong[0], lng: gym.latlong[1] }}
          title={gym.name}
          onClick={() => setSelected(gym)}
        />
      ))}
      {selected ? (
        <InfoWindow
          anchor={{ lat: selected.latlong[0], lng: selected.latlong[1] }}
          position={{ lat: selected.latlong[0], lng: selected.latlong[1] }}
          onCloseClick={() => setSelected(null)}
        >
          <div>
            <p>{selected.name}</p>
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
}
