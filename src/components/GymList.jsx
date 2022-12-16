import { fetchGyms } from "../gymdata";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import "../css/App.css";
import { MapsAPI } from "./MapsAPI";
import { useEffect } from "react";
import { userLocation } from "./MapsAPI";
import { getDistance } from "geolib";
import { gyms } from "./MapsAPI";

export function GymList({ user }) {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <>
      <br />
      <br />
      <br />

      <br />

      <br />
      <MapsAPI />
      <br />

      <br />
      <br />
      <br />
    </>
  );
}
