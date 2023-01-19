import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import Single from "./pages/single";
import { Profesiones } from "./pages/profesiones.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Anuncios } from "./pages/anuncios";
import { PerfilCliente } from "./pages/perfilCliente";

import PerfilProfesional from "./pages/perfilProfesional";
import { PublicarAnuncio } from "./pages/publicarAnuncio";
import { Login } from "./pages/login";
import {SignUp} from "./pages/signup";
import { RequestPass } from "./component/request_password";
import { Reset_Pass } from "./component/reset_password ";

import AnunciosFontanero from "./pages/AnunciosFontanero";
import AnunciosElectricista from "./pages/AnunciosElectricista";
import AnunciosCarpintero from "./pages/AnunciosCarpintero";
import AnunciosAlbañil from "./pages/AnunciosAlbañil";


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

          <Route
            element={<AnunciosFontanero />}
            path="/profesiones/anuncios/fontanero"
          />
          <Route
            element={<AnunciosElectricista />}
            path="/profesiones/anuncios/electricista"
          />
            <Route
            element={<AnunciosCarpintero />}
            path="/profesiones/anuncios/carpintero"
          />

<Route
            element={<AnunciosAlbañil />}
            path="/profesiones/anuncios/albanil"
          />


          <Route element={<Single />} path="/single/:user_id" />
          <Route element={<PublicarAnuncio />} path="/publicarAnuncio" />
      

          <Route element={<Anuncios />} path="/profesiones/anuncios" />
          <Route
            element={<PerfilProfesional />}
            path="/profesiones/anuncios/perfil_profesional"
          />

          <Route element={<PerfilCliente />} path="/perfilcliente/:id" />
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/signup" />
           <Route element={<RequestPass /> } path="/request_password" />
            <Route element={<Reset_Pass /> } path="/reset_password" />


          <Route element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(Layout);
