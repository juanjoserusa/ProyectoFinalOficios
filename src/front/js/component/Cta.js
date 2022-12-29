import React from "react";

import mano from"../../assets/CTA/manomovil.png"

const Cta = () => {


    const handleClick = () => {
        return ( 
            alert("No implementado")
        )
    }

    return(
        <div className="container-flex col-xxl-12 px-4  bg-white text-dark" >
            <div className="row flex-lg-row align-items-center g-5 ">
                <div className="col-lg-5 textCtaTitle">
                <h1 className="display-4 fw-bold lh-1 mb-3 ">Descarga HandleHome en tus dispositivos moviles</h1>
                    <p className="textCtaParr">Ahora puedes descargarte nuestra aplicacion desde la apple store y play store de Google, para usarla donde quieras</p>
                </div>
                <div className="col-3 col-lg-3 me-5">
                    <img className="imagenCta"src={mano}/>
                </div>
                <div className="col-lg-3 ms-5">
                            <button 
                                onClick={handleClick}
                                type="button" 
                                className="btn btn-outline-light w-50 btnCta">
                                    <img 
                                        className="mw-100" 
                                        src="https://static.vecteezy.com/system/resources/previews/002/520/836/non_2x/download-apps-button-google-play-and-app-store-vector.jpg"
                                    />
                            </button>

                           
                </div>               
            </div>
        </div>
    )
};

export default Cta