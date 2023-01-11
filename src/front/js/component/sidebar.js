import React from "react";
import { Link } from "react-router-dom";
import { SidebarDataProf } from "../pages/sidebarDataProf"

function Sidebar () {

	return (
		<div className="sidebar-navigation">
			<ul classname= "sidebarList">
			 {SidebarDataProf.map((val, key) =>{  //Cambiar sidedataCliente
			   return (
				<li
				  key={key}
				  className="row"
				  onClick={() =>{
					window.location.pathname =val.link;  //pestanas de los perfiles
				  }} >
					<div id="title">{val.title}</div>
				</li>
			   );	
			 })}

			</ul>
		</div>
	);
};

export default Sidebar