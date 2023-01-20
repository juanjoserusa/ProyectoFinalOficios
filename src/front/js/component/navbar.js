import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "/workspace/ProyectoFinalOficios/src/front/js/store/appContext.js";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const token = store.token;
  const user_type = store.user_type;
  const id = store.id

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand nav-title" href="/">
          HandleHome
        </a>

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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item me-5">
                <Link to="/">
                  <a className="nav-link active enlacesNavbar">Inicio</a>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to="/profesiones/anuncios">
                  <a className="nav-link enlacesNavbar">Profesiones</a>
                </Link>
              </li>

              {token ? (
                <li className="nav-item me-5 ">
                  {user_type === true ? (
                    <Link to={`profesiones/anuncios/perfil_profesional/${id}`}>
                      <a className="nav-link enlacesNavbar">
                        Mi perfil profesional{" "}
                      </a>
                    </Link>
                  ) : (
                    <Link to={`/perfilcliente/${id}`}>
                      <a className="nav-link enlacesNavbar">
                        Mi perfil cliente{" "}
                      </a>
                    </Link>
                  )}
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-end ">
          <div className="ml-auto">
            {!token ? (
              <Link to="/signup">
                <button className="btn btn-danger nav-bt me-3" type="button">
                  Crear Usuario
                </button>
              </Link>
            ) : (
              <Link to="/publicarAnuncio">
                {user_type === true ? (
                  <button className="btn btn-warning nav-bt" type="button">
                    Crear Anuncio
                  </button>
                ) : (
                  ""
                )}
              </Link>
            )}

            {!token ? (
              <Link to="/login">
                <button className="btn btn-danger nav-bt me-3" type="button">
                  Inicia Sesión
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  actions.logout();
                }}
                className="btn btn-danger nav-bt"
                type="button"
              >
                Cerrar Sesión
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
