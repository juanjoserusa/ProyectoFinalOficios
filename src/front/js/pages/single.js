import React from "react";
import { Mensaje } from "../component/Mensajes";
import { useParams } from "react-router-dom";


const Single = () => {

	const params = useParams()

	return(
		<div className="container">
			<div className="d-flex justify-content-center">
			<Mensaje user_id={params.user_id} />
			</div>
		
		</div>
	)
}
export default Single