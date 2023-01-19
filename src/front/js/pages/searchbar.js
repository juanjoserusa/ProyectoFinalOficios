import React, { useContext, useState } from 'react';
import { Context } from "../store/appContext";
import { BiMap } from "react-icons/bi";

export const Searchbar = () => {


  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const {actions} = useContext(Context)
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    fetch('/search', {
      method: 'POST',
      body: JSON.stringify({
        query: query
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(results => {
        setResults(results);
      });
  };
  return (
    <div>
      <div>
        <nav
          className="navbar navbar-expand-lg p-4"
          style={{ backgroundColor: "#d0f3c6" }}
        >
          <div className="container-fluid" style={{ width: "1100px" }}>
            <form class="row gy-2 gx-3 align-items-center">
              <div class="col-auto">
                <div className="input-group">
                  <button className="btn btn-outline-success">
                    <BiMap />
                  </button>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"  style={{ width: "500px" }}
                    id="autoSizingInputGroup"
                    placeholder="Selecciona tu ciudad..."
                  ></input>
                </div>
              </div>
         {/*      <div className="col-auto">
                <input
                  type="text"
                  class="form-control"
                  id="autoSizingInput"
                  placeholder="Elige tu presupuesto"
                ></input>
              </div> */}
              <div className="col-auto">
                <label className="visually-hidden" for="autoSizingSelect">
                  Preference
                </label>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  ></input>
                  <label className="form-check-label" for="autoSizingCheck">
                    Urgente
                  </label>
                </div>
              </div>
              <div className="col-auto">
              <button className="btn btn-warning" onClick={(event) => {

                  actions.search(query)}}
                  type="button">
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};
