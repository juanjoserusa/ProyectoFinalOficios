import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
	<a className="navbar-brand nav-title" href="#">HandleHome</a>
	
	
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-center " id="navbarNav">
      
      <ul className="navbar-nav d-flex justify-content-evenly ">
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Profesiones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mi perfil</a>
        </li>
      </ul>
      
    </div>
	<div className="d-flex justify-content-end ">
		<button type="button" className="btn btn-primary nav-bt">Login</button>
	</div>
  </div>
</nav>
	);
};
