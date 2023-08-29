import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "../Paginas/Home/";
import Contato from "../Paginas/Contato/";

const Rotas = () => {
    return(
        <HashRouter>
            <Routes>
                <Route exact path='/' element = {<Home/>} />
                <Route path='/contato' element = {<Contato/>} />
            </Routes>
        </HashRouter>
    );
}

export default Rotas;