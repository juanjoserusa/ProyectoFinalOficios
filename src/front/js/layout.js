import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import {Profesiones} from "./pages/profesiones.js"
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Anuncios } from "./pages/anuncios";
import { PerfilCliente } from "./pages/perfilCliente"
import {FormularioRegistroCliente} from "./component/FormularioRegistroCliente.js";
import PerfilProfesional from "./pages/perfilProfesional";


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
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Profesiones />} path="/profesiones" />
                        <Route element={<Anuncios />} path="/profesiones/anuncios" />
                        <Route element={<PerfilProfesional/>} path="/profesiones/anuncios/perfil_profesional" />

                        <Route element={<PerfilCliente />} path="/perfilcliente" />

                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
}

export default injectContext(Layout);
