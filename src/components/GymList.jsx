import { fetchGyms } from "../gymdata";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import "../App.css";
import { useEffect } from "react";

export function GymList({ user }) {
  const gyms = fetchGyms();
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
      <label>
        <b>Search:</b>
      </label>
      <input
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
      <br />
      <br />
      {gyms
        .filter((gym) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = gym.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        .map((gym) => (
          <>
            <Link to={gym.slug}>
              <Paper
                elevation={4}
                key={gym.name}
                square={false}
                variant="elevation"
              >
                {gym.name}
              </Paper>
            </Link>
            <br />
          </>
        ))}
      <br />
      <br />
      <br />
    </>
  );
}
