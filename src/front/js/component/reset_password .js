import React, { useState } from "react";

export const Reset_Pass = () => {
  const [password, password_confirm] = useState("");

  const [datos,setDatos] =useState ({
    password :"",
    password_confirm : " "
  });

  const enviarDatos = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container ">
        <form>
          <div className="mb-3">
            <label for="exampleInputPasword" class= "form-label">Tu nueva contrasena</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingrese su password"
                onChange={(e) => datos.password(e.target.value)}
                value={password}
                required
              ></input>
              <div id="emailHelp" class="form-text"></div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPasword_repite" class="form-label"  >
              Reingresa tu nueva contrasena
            </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Ingrese su password nuevamente"
                onChange={(e) => setDatos.password_confirm(e.target.value)}
                value={password_confirm}
                required
              ></input>
            </div>
             <button type="submit" class="btn btn-primary" onSubmit={enviarDatos}>
            Enviar
          </button>
        </form>
    </div>
  );
};


