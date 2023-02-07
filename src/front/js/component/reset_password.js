import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context }  from "../store/appContext"
import '../../styles/resetpass.css'

export const RessetPass  = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [newpassword, setnewPassword] = useState("");
    const [key_pass, setKey_pass] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

      const handleResetPassword =async (e) => {
         e.preventDefault();
      if (!error) {
         actions.password(setpassword);
        navigate("/login");302
      };
      }
            
    return (
      <div className=" text-center pageReset">  
          <div className="reset_Frm">
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
                  onChange={(e) => setnewPassword(e.target.value)}
                  value={newpassword}
                  required
                  className="inputLogin Key"
                ></input>
                <label  className="label">Key</label>
              </div>
    
              <button className="btn btn-warning submitBtn" type="submit">
                Enviar
              </button>
           </form>
          </div>
      </div>
    );
}