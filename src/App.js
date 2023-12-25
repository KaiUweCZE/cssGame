import React from "react";
import { BrowserRouter as BR, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Game from "./pages/Game";
import About from "./pages/About";
import Registration from "./pages/Registration";

const App = () => {

    return(
        <BR>
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/game" element={<Game/>}/>
                <Route path="/registration" element={<Registration/>}/>
            </Route>
        </Routes>
        </BR>
    )
}

export default App