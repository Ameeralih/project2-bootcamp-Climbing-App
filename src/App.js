import React from "react";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/gym-search">Gym Search</Link> |{" "}
            <Link to="/gym-page">Gym Abc</Link>
          </nav>
          <Outlet />
        </header>
      </div>
    );
  }
}

export default App;
