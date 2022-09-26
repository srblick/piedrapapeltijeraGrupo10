import React from "react";
import Juego from "./components/Juego";
import {MenuInicio} from "./components/MenuInicio"
import Cards from "./components/cards"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Game(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuInicio/>} />
                <Route path="/juego" element={<Juego/>} />
                <Route path="/desarrolladores" element={<Cards/>} />
                <Route path="/reglasdeljuego" element={<Cards/>} />
                <Route path="*" element={<Juego/>} />
            </Routes>
        </BrowserRouter>
    );
}