import React from "react";
import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Academy from "./pages/Academy";
import Graph from "./pages/Graph";
import Registration from "./pages/Registration";
import { ApolloClientProvider } from "./client";
import { UserContextProvider } from "./contexts/UserContext";
import RoadMap from "./pages/RoadMap";
import ProtectedLayout from "./components/ProtectedLayout";
import { LevelProvider } from "./contexts/FormContext";
import LevelInfo from "./pages/LevelInfo";
import Welcome from "./pages/Welcome";
import Building from "./pages/Building";

const App = () => {
  return (
    <ApolloClientProvider>
      <LevelProvider>
        <UserContextProvider>
          <BR>
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="/game" element={<Game />} />
                <Route path="/login" element={<Registration />} />
                <Route element={<ProtectedLayout />}>
                  <Route path="/building" element={<Building />} />
                  <Route path="/map" element={<RoadMap />} />
                  <Route path="/level/:id" element={<LevelInfo />} />
                  <Route path="/welcome" element={<Welcome />} />
                </Route>
              </Route>
            </Routes>
          </BR>
        </UserContextProvider>
      </LevelProvider>
    </ApolloClientProvider>
  );
};

export default App;
