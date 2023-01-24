import React, { useState } from "react";

export const CheckEmail = (e) => {
  const [response, setResponse] = useState(null);

  const checkEmail = (email) => {
    fetch(
      "/api/private",
      {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((rescheck) => rescheck.json())
      .then((datacheck) => {
        if (datacheck.exists) {
          setResponse("El correo electrónico ya está registrado.");
        } else {
          setResponse("El correo electrónico no está registrado.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };
}

