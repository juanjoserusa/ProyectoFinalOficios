import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import DropdownHome from "../component/DropdownHome";
import { useNavigate } from "react-router-dom";
import "/workspace/ProyectoFinalOficios/src/front/styles/searchbar.css"
import "../../styles/index.css"

export const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { actions } = useContext(Context);
  const mensaje= "No se encuentra ese codigo postal"

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/search", {
      method: "POST",
      body: JSON.stringify({
        query: query,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((results) => {
        setResults(results);
      });
  };
  return (
    <div>
      <div className="container-fluid busqueda pb-3  pt-3 mt-3">
        
        
          <div className="container-fluid d-flex justify-content-around barrabusqueda " >
            <form class=" align-items-center ">
              <div class="col-auto">
                <div className="input-group">
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control input-busqueda"
                    id="autoSizingInputGroup"
                    placeholder="Codigo postal ..."
                  ></input>
                  <button
                    className="btn btnBusqueda me-4"
                    onClick={(event) => {
                      actions.search(query);
                    }}
                    type="button"
                  >
                    Buscar
                  </button>
                  <div>
                    <DropdownHome />
                  </div>
                  <div>
                    <button
                      className="btn ms-3 btnReiniciarBusqueda"
                      onClick={() => navigate("/profesiones/anuncios")}
                    >
                      Reiniciar busqueda
                    </button>
                  </div>
                </div>
              </div>
            </form>
            
          </div>
          
      </div>
      
    </div>
  );
};
