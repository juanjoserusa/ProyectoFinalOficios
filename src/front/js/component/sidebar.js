import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sidebar.css";

export const Sidebar = () => {
  return (
    
    <>
      <header>
        <nav
          id="sidebarMenu"
          class="collapse d-lg-block sidebar collapse sidebarBody">
          <div class="position-sticky">
            <div class="list-group list-group-flush mx-3 mt-4">
              <a
                class="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
                data-mdb-toggle="collapse"
                href="#collapseExample1"
                aria-expanded="true"
                aria-controls="collapseExample1">
               <i FontAwesomeIcon icon="fa-solid fa-user"></i>
                <span>My Perfil</span>
              </a>

              <ul
                id="collapseExample1"
                class="collapse show list-group list-group-flush"
              >
                <li class="list-group-item py-1">
                  <a href="/" class="text-reset">
                    Inicio
                  </a>
                </li>
                <li class="list-group-item py-1" >
                  <a href="" class="text-reset" title="Mensaje">
                    Mensaje
                  </a>
                </li>
                <li class="list-group-item py-1">
                  <a href="" class="text-reset">
                   Valoraciones
                  </a>
                </li>
                <li class="list-group-item py-1">
                  <a href="" class="text-reset">
                    Link
                  </a>
                </li>
              </ul>
              <a
                class="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
                data-mdb-toggle="collapse"
                href="#collapseExample2"
                aria-expanded="true"
                aria-controls="collapseExample2"
              >
                <i class="fas fa-chart-area fa-fw me-3"></i>
                <span>Collapsed menu</span>
              </a>

              <ul
                id="collapseExample2"
                class="collapse list-group list-group-flush"
              >
                <li class="list-group-item py-1">
                  <a href="" class="text-reset">
                    Link
                  </a>
                </li>
                <li class="list-group-item py-1">
                  <a href="" class="text-reset">
                    Link
                  </a>
                </li>
                <li class="list-group-item py-1">
                  <a href="" class="text-reset">
                    Link
                  </a>
                </li>
                <li class="list-group-item py-1">
                  <a href="" class="text-reset">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main class="mainSidebar" >
        <div class="container pt-4"></div>
      </main>
    </>
  );
};
