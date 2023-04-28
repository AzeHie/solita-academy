import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import Journeys from "./pages/Journey/Journeys";
import Stations from "./pages/Station/Stations";
import StationDetail from "./pages/Station/StationDetail";
import MainHeader from "./Navigation/MainHeader";
import NewStation from "./pages/Station/NewStation";
import NewJourney from "./pages/Journey/NewJourney";

function App() {
  let routes: any;

  routes = (
    <Routes>
      <Route path="/" element={<Journeys />} />
      <Route path="/newjourney" element={<NewJourney />} /> 
      <Route path="/newstation" element={<NewStation />} />
      <Route path="/stations" element={<Stations />} />
      <Route path="/stations/:stationId" element={<StationDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  return (
    <Fragment>
      <MainHeader />
      <main>{routes}</main>
    </Fragment>
  );
}

export default App;
