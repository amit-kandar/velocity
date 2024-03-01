import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import Notification from "./components/Notification";
import home from "./routes/home";

function App() {
  return (
    <Router>
      <Notification />
      <Navbar />
      <SubNavbar />
      <Routes>
        <Route path="/" Component={home} />
      </Routes>
    </Router>
  );
}

export default App;
