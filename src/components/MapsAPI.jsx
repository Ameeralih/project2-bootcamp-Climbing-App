import React from "react";
import "../css/App.css";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { fetchGyms } from "../gymdata";
import { getDistance } from "geolib";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

export let gyms = fetchGyms();
export let userLocation = null;
const libraries = ["places"];

const mapContainerStyle = {
  width: "95vw",
  height: "50vh",
};

let centre = { lat: 1.3521, lng: 103.8198 };

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
};

export function MapsAPI() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Search({ panTo }) {
  const [selected, setSelected] = React.useState(null);
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutoComplete({
    requestOptions: {
      location: { lat: () => 1.3521, lng: () => 103.8198 },
      radius: 50 * 1000,
    },
  });

  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
            userLocation = { latitude: lat, longitude: lng };
            const newGymsArray = gyms.map((gym) => ({
              ...gym,
              distance: getDistance(
                { latitude: gym.latlong[0], longitude: gym.latlong[1] },
                userLocation
              ),
            }));
            newGymsArray.sort(function (a, b) {
              let keyA = a.distance;
              let keyB = b.distance;
              // Compare the 2 dates
              if (keyA < keyB) return -1;
              if (keyA > keyB) return 1;
              return 0;
            });
            gyms = newGymsArray;

            setSelected(null);
          } catch (error) {
            console.log("error!");
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disables={!ready}
          placeholder="Enter location"
        />
        <ComboboxPopover>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description}></ComboboxOption>
            ))}
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

function Map() {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(13);
  }, []);
  const [selected, setSelected] = React.useState(null);
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  return (
    <>
      <Search panTo={panTo} />
      <GoogleMap
        zoom={11.5}
        center={centre}
        mapContainerClassName="map-container"
        mapContainerStyle={mapContainerStyle}
        options={options}
        onLoad={onMapLoad}
      >
        {gyms.map((gym) => {
          return (
            <Marker
              key={gym.name}
              position={{ lat: gym.latlong[0], lng: gym.latlong[1] }}
              title={gym.name}
              onClick={() => setSelected(gym)}
            >
              {selected === gym && (
                <InfoWindow onCloseClick={() => setSelected(null)}>
                  <div>
                    <b>
                      <p>{selected.name}</p>
                    </b>
                    <p>{selected.address}</p>
                    <p>{selected.website}</p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          );
        })}
      </GoogleMap>
      <div className="filterInputAndCards">
        <div>
          <label>
            <b>Filter Gym name:&nbsp; &nbsp;</b>
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
        </div>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {gyms
            .filter((gym) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = gym.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((gym) => (
              <li key={gym.slug} className="gymCards">
                <Link to={gym.slug}>
                  <Paper
                    elevation={4}
                    key={gym.name}
                    square={false}
                    variant="elevation"
                  >
                    <img width="70px" alt="Logo" src={gym.logoURL} /> &nbsp;
                    &nbsp;
                    {gym.name}
                  </Paper>
                </Link>
                <br />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
