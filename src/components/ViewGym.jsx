import { useParams } from "react-router-dom";
import { fetchGyms } from "../gymdata";
import { GymAmenities } from "./GymAmenities";
import { OpeningHours } from "./OpeningHours";
import { VaryingOpeninghours } from "./VaryingOpeningHours";
import { Reviews } from "./Reviews";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoBox,
  InfoWindow,
} from "@react-google-maps/api";

function MapsAPIGymPage() {
  const params = useParams();
  const currentGym = fetchGyms().find((gym) => gym.slug === params.slug);
  const containerStyle = {
    width: "350px",
    height: "350px",
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={16}
      center={{ lat: currentGym.latlong[0], lng: currentGym.latlong[1] }}
      mapContainerStyle={containerStyle}
    >
      <Marker
        position={{ lat: currentGym.latlong[0], lng: currentGym.latlong[1] }}
      ></Marker>
    </GoogleMap>
  );
}
export function ViewGym({ user }) {
  const params = useParams();
  const currentGym = fetchGyms().find((gym) => gym.slug === params.slug);

  if (currentGym) {
    return (
      <div className="viewGym">
        <br />
        <br />
        <h1>{currentGym.name}</h1>
        <div>
          <MapsAPIGymPage
            latitude={currentGym.latlong[0]}
            longitude={currentGym.latlong[1]}
          />
        </div>
        <div>Address: {currentGym.address}</div>
        <div>Postal: {currentGym.postal}</div>
        <div>
          Website:<a href={currentGym.website}> {currentGym.website} </a>
        </div>
        <br />
        <GymAmenities currentGym={currentGym} />
        <br />
        <div>
          {currentGym.slug === "bff-bukit-timah" ? (
            <VaryingOpeninghours currentGym={currentGym} />
          ) : (
            <OpeningHours currentGym={currentGym} />
          )}
        </div>
        <br />
        {/* <Reviews currentGym={currentGym} user={user} /> */}
        <br />
        <br />
      </div>
    );
  }
}
