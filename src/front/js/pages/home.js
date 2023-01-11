import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Footer } from "../component/footer";

import "../../styles/home.css";
import Cta from "../component/Cta";
import JumboCliente from "../component/Jumbocliente";
import JumboProfesional from "../component/Jumboprofesional";
import DescriptionHome from "../component/DescriptionHome";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
		<div className="container-flex">
			<JumboCliente />
			<DescriptionHome />
			<JumboProfesional />
			<Cta />
		</div>
		<Footer />
		</>
	);
};
