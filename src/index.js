import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GymPage } from "./gym-page/GymPage";
import { GymSearch } from "./components/GymSearch";
import { GymHomePage } from "./components/GymHomePage";
import { ViewGym } from "./components/ViewGym";
import { GymList } from "./components/GymList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GymHomePage />}>
        <Route path="/gyms" element={<GymSearch />}>
          <Route index element={<GymList />} />

          <Route path=":slug" element={<ViewGym />} />
        </Route>

        <Route path="gym-page" element={<GymPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
