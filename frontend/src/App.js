import React from "react";
import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import SharedLayout from "@components/layouts/SharedLayout";
import Home from "@pages/home/Home";
import Game from "@pages/game/Game";
import Academy from "@pages/academy/Academy";
import Registration from "@pages/registration/Registration";
import { ApolloClientProvider } from "./services/client";
import { UserContextProvider } from "./contexts/UserContext";
import RoadMap from "@pages/road-map/RoadMap";
import ProtectedLayout from "./components/layouts/ProtectedLayout";
import { LevelProvider } from "@contexts/form-contexts/levelContext";
import LevelInfo from "@pages/academy/LevelInfo";
import Building from "@pages/building-mode/Building";
import Database from "@pages/database/Database";
import Intro from "@pages/intro/Intro";
import SubDatabase from "@pages/database/DatabaseLevel";
import CustomStylesProvider from "@contexts/building-contexts/CustomStylesProvider";
import { CheckContextProvider } from "@contexts/form-contexts/checkContext";
import Verify from "./pages/verify/Verify";
import ErrorPage from "./components/errors/ErrorPage";
import ProfileDashboard from "./pages/profile/ProfileDashboard";
import ResetPassword from "./pages/reset-password/ResetPassword";
import Guide from "./pages/guide/Guide";

const App = () => {
  return (
    <ApolloClientProvider>
      <LevelProvider>
        <UserContextProvider>
          <CustomStylesProvider>
            <CheckContextProvider>
              <BR>
                <Routes>
                  <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/guide" element={<Guide />} />
                    <Route path="/login" element={<Registration />} />
                    <Route path="/verify/:id" element={<Verify />} />
                    <Route
                      path="/reset-password/:id"
                      element={<ResetPassword />}
                    />
                    <Route element={<ProtectedLayout />}>
                      <Route path="/academy" element={<Academy />} />
                      <Route path="/game" element={<Game />} />
                      <Route path="/profile" element={<ProfileDashboard />} />
                      <Route path="/database" element={<Database />} />
                      <Route path="/building" element={<Building />} />
                      <Route path="/map" element={<RoadMap />} />
                      <Route path="/level/:id" element={<LevelInfo />} />
                      <Route path="/database/:id" element={<SubDatabase />} />
                      <Route path="/welcome" element={<Intro />} />
                    </Route>
                    <Route path="*" element={<ErrorPage />} />
                  </Route>
                </Routes>
              </BR>
            </CheckContextProvider>
          </CustomStylesProvider>
        </UserContextProvider>
      </LevelProvider>
    </ApolloClientProvider>
  );
};

export default App;
