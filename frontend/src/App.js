import React from "react";
import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Game from "./pages/Game";
import About from "./pages/About";
import Graph from "./pages/Graph";
import Registration from "./pages/Registration";
import {ApolloClientProvider} from "./client";


const App = () => {

    return(
        <ApolloClientProvider>
            <BR>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/attempt" element={<Graph/>}/>
                    <Route path="/game" element={<Game/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                </Route>
            </Routes>
            </BR>
        </ApolloClientProvider>
    )
}

export default App