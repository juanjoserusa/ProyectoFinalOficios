import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import Cta from "../component/Cta";
import JumboCliente from "../component/Jumbocliente";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-flex">
			<JumboCliente />
			<Cta />
		</div>
	);
};
