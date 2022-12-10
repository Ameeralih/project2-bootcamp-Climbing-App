import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GymSearch } from "./components/GymSearch";
import { GymHomePage } from "./components/GymHomePage";
import { ViewGym } from "./components/ViewGym";
import { GymList } from "./components/GymList";
import { AuthLogin } from "./auth/AuthLogin";
import { AuthCreate } from "./auth/AuthCreate";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<AuthCreate />} />
        <Route path="/login" element={<AuthLogin />} />

        <Route path="/" element={<GymHomePage user={user} />}>
          <Route path="/gyms" element={<GymSearch user={user} />}>
            <Route index element={<GymList user={user} />} />
            <Route path=":slug" element={<ViewGym user={user} />} />
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
