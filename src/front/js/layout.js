import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import {Profesiones} from "./pages/profesiones.js"
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Anuncios } from "./pages/anuncios";
import PerfilProfesional from "./pages/PerfilProfesional.js";

//create your first component
function Layout() {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Profesiones />} path="/profesiones" />
                        <Route element={<Anuncios />} path="/profesiones/anuncios" />
                        <Route element=<PerfilProfesional /> path="/perfilprofesional"/>
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
}

export default injectContext(Layout);
