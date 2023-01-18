import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import Single from "./pages/single";
import {Profesiones} from "./pages/profesiones.js"
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Anuncios } from "./pages/anuncios";
import { PerfilCliente } from "./pages/perfilCliente"

import PerfilProfesional from "./pages/perfilProfesional";
import { PublicarAnuncio } from "./pages/publicarAnuncio";
import { Login } from "./pages/login";
import SignUp from "./pages/signup";
import { Reset_Request } from "./pages/reset_request";


//create your first component
function Layout() {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
          
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single" />
                        <Route element={<PublicarAnuncio />} path="/publicarAnuncio" />
                        {/* <Route element={<Profesiones />} path="/profesiones" /> */}
                        <Route element={<Anuncios />} path="/profesiones/anuncios" />
                        <Route element={<PerfilProfesional/>} path="/profesiones/anuncios/perfil_profesional" />

                        <Route element={<PerfilCliente />} path="/perfilcliente" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Reset_Request /> } path="/reset_request" />

                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
           
            </BrowserRouter>
        </div>
    );
}

export default injectContext(Layout);
