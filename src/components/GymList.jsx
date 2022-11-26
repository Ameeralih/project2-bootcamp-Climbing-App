import { fetchGyms } from "../gymdata";
import { Link } from "react-router-dom";
import { ViewGym } from "./ViewGym";

export function GymList() {
  const gyms = fetchGyms();
  return gyms.map((gym) => (
    <Link to={gym.slug}>
      {gym.name} <ViewGym slug={gym.slug} />{" "}
    </Link>
  ));
}
