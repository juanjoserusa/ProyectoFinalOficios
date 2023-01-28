import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context }  from "../store/appContext"
import '../../styles/resetpass.css'

export const RessetPass  = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [key_pass, setKey_pass] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

   const handleResetPassword =async (e) => {
      e.preventDefault();
      const isValid = await actions.validateKeyPass(email, key_pass);
      if (isValid) {
          await actions.updatePassword(email, newPassword);
          navigate('/');
      } else {
          alert('La key temporal es inválida o ha expirado');
      }
    };
     const handleSubmit = (e) => {
       if (!newPassword) {
          setError("Ingrese una= nuevo password");
      } else {
        setError("La key temporal es inválida o ha expirado'");
      }
      }; 
            
    return (
      <div className=" text-center pageReset">
          <div className="reset_Frm">
          <div className="error">{error}</div>
           < form onSubmit={handleResetPassword} className="form">
              <h1 className="title">Nueva contraseña</h1>
              <div className="inputContainer">
                <input
                  type="email"
                  placeholder="Ingrese su email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  className="inputLogin input"
                ></input>
                <label htmlFor="" className="label">Email</label>
              </div>
              <div className="inputContainer">
                <input
                  type="key"
                  placeholder="Ingrese key enviada por correo"
                  handleSubmit={(e) => setKey_pass(e.target.value)}
                  value={key_pass}
                  required
                  className="inputLogin Key"
                ></input>
                <label  className="label">Key</label>
              </div>
              <div className="inputContainer">
                <input
                  type="password"
                  placeholder="Ingrese su nueva password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={newPassword}
                  required
                  className="inputLogin input"
                ></input>
                <label  className="label">Password</label>
              </div> 
              <button className="btn btn-warning submitBtn" type="submit">
                Enviar
              </button>
           </form>
          </div>
      </div>
    ) 
    } 


