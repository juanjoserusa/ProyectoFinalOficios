import React from "react";

export const Reset_Request = () => {
  // const btn = document.getElementById("button");

  // document.getElementById("form").addEventListener("submit", function (event) {
  //   event.preventDefault();

  //   btn.value = "Sending...";

  //   const serviceID = "default_service";
  //   const templateID = "template_i02czvn";

  //   emailjs.sendForm(serviceID, templateID, this).then(
  //     () => {
  //       btn.value = "Enviado";
  //       alert("Sent!");
  //     },
  //     (err) => {
  //       btn.value = "Send Email";
  //       alert(JSON.stringify(err));
  //     }
  //   );
  // });
  return (
    <div className="container-fluid center">
      <div className="row">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Recupera tu contrasena</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
            ></input>
            <small className="form-text text-muted">
              Ingrese su email registrado
            </small>
          </div>
          <button type="submit" class="btn btn-primary">
            Enviar link
          </button>
        </form>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></script>
        <script type="text/javascript">
          emailjs.init('kfaW5RF3PL38a9QEP')
        </script>
      </div>
    </div>
  );
};
