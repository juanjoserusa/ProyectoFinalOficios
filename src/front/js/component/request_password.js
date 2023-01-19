import React, { useState } from "react";

export const RequestPass = () => {
  const [email, setEmail] = useState("email");

  const handleInputChange = (event) => {
    setEmail({
      ...datos,
      [event.target.email]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container-fluid center">
      <div className="row">
        <form>
          <div className="form-group">
            <label for="user_email">Recupera tu contrasena</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              id="user_email"
              onChange={handleInputChange}
            ></input>
            <small className="form-text text-muted">
              Ingrese su email registrado
            </small>
          </div>
          <button type="submit" class="btn btn-primary" onSubmit={enviarDatos}>
            Enviar
          </button>
        </form>
      </div>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></script>

      <script type="text/javascript">emailjs.init('kfaW5RF3PL38a9QEP')</script>
    </div>
  );
};
