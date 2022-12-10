import { useParams } from "react-router-dom";
import { fetchGyms } from "../gymdata";
import { GymAmenities } from "./GymAmenities";
import { OpeningHours } from "./OpeningHours";
import { VaryingOpeninghours } from "./VaryingOpeningHours";
import { Reviews } from "./Reviews";

export function ViewGym() {
  const params = useParams();
  const currentGym = fetchGyms().find((gym) => gym.slug === params.slug);
  if (currentGym) {
    return (
      <>
        <br />
        <br />
        <h1>{currentGym.name}</h1>
        <div style={{ border: "solid 1px", height: "300px" }}>
          <h4>Gym Location (Insert Google Map)</h4>
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
        <Reviews currentGym={currentGym} />
        <br />
        <br />
      </>
    );
  }
}
