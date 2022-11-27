import { useParams } from "react-router-dom";
import { fetchGyms } from "../gymdata";

export function ViewGym() {
  const params = useParams();
  const currentGym = fetchGyms().find((gym) => gym.slug === params.slug);
  if (currentGym) {
    return <div>{currentGym.name}</div>;
  }
}
