import React, { useContext } from "react";
import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Game from "./pages/Game";
import About from "./pages/About";
import Graph from "./pages/Graph";
import Registration from "./pages/Registration";
import {ApolloClientProvider} from "./client";
import { UserContextProvider } from "./contexts/UserContext";
import RoadMap from "./pages/RoadMap";
import ProtectedLayout from "./components/ProtectedLayout";
import { CheckContextProvider, LevelProvider } from "./contexts/FormContext";


const App = () => {
    
    return(
        <ApolloClientProvider>
            <LevelProvider>
            <UserContextProvider>
            <BR>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/game" element={<Game/>}/>
                    <Route path="/login" element={<Registration/>}/>
                    <Route element={<ProtectedLayout />}>
                        <Route path="/attempt" element={<Graph/>}/>
                        <Route path="/map" element={<RoadMap/>} />
                    </Route>
                </Route>
            </Routes>
            </BR>
            
            </UserContextProvider>
            </LevelProvider>
        </ApolloClientProvider>
    )
}

export default App