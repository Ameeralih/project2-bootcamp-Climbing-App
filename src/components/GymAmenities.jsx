import { BsCheckLg, BsXLg } from "react-icons/bs";

export function GymAmenities({ currentGym }) {
  return (
    <div>
      Facilities / Amenities:
      <br />
      <br />
      Boulder:
      {currentGym.bouldering === true ? <BsCheckLg /> : <BsXLg />}
      <br />
      Auto-Belay:
      {currentGym.autobelay === true ? <BsCheckLg /> : <BsXLg />}
      <br />
      Top Rope: {currentGym.toprope === true ? <BsCheckLg /> : <BsXLg />}
      <br />
      Lead: {currentGym.lead === true ? <BsCheckLg /> : <BsXLg />}
      <br />
      Air-Conditioned: {currentGym.ac === true ? <BsCheckLg /> : <BsXLg />}
      <br />
      Showers: {currentGym.shower === true ? <BsCheckLg /> : <BsXLg />}
      <br />
      Water-Cooler:{" "}
      {currentGym.watercooler === true ? <BsCheckLg /> : <BsXLg />}
    </div>
  );
}
