import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GymSearch } from "./components/GymSearch";
import { GymHomePage } from "./components/GymHomePage";
import { ViewGym } from "./components/ViewGym";
import { GymList } from "./components/GymList";
// import { AuthLogin } from "./auth/AuthLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/auth/create" element={<AuthLogin />} /> */}
        <Route path="/" element={<GymHomePage />}>
          <Route path="/gyms" element={<GymSearch />}>
            <Route index element={<GymList />} />
            <Route path=":slug" element={<ViewGym />} />
          </Route>
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
}

export default App;
