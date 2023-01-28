import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";
import logo from "/workspace/ProyectoFinalOficios/src/front/assets/Handlehome.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()

  const token = store.token;
  const user_type = store.user_type;
  const id = store.id

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid ">
      <Link to="/">
      <img src={logo} className="nav-title" alt="cliente" href="/"/>
      </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </span>
        </button>
        <div className="d-flex justify-content-center ">
          <div className="collapse navbar-collapse " id="navbarNav">
            <div className="">
            <ul className="navbar-nav ">
              <li className="nav-item me-2">
                <Link to="/">
                  <a className="nav-link active enlacesNavbar">Inicio</a>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link to="/profesiones/anuncios">
                  <a className="nav-link enlacesNavbar">Profesiones</a>
                </Link>
              </li>

              {token ? (
                <li className="nav-item me-2">
                  {user_type === true ? (
                    <Link to={`profesiones/anuncios/perfil_profesional/${id}`}>
                      <a className="nav-link enlacesNavbar">
                        Mi perfil profesional{" "}
                      </a>
                    </Link>
                  ) : ("")}
                </li>
              ) : (
                ""
              )}
            </ul>
            </div>
        
        <div className="d-flex justify-content-end  me-5">
          <div className="ml-auto">
            {!token ? (
              <Link to="/signup">
                <button className="btn nav-bt me-3" type="button">
                  Crear Usuario
                </button>
              </Link>
            ) : (
              <Link to="/publicarAnuncio">
                {user_type === true ? (
                  <button className="btn nav-bt me-3" type="button">
                    Crear Anuncio
                  </button>
                ) : (
                  ""
                )}
              </Link>
            )}

            {!token ? (
              <Link to="/login">
                <button className="btn nav-bt  " type="button">
                  Inicia Sesión
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  actions.logout();
                  navigate("/")
                }}
                className="btn nav-bt "
                type="button"
              >
                Cerrar Sesión
              </button>
            )}
          </div>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};
