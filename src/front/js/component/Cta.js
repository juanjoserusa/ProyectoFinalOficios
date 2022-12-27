import React from "react";

const Cta = () => {


    const handleClick = () => {
        return ( 
            alert("No implementado")
        )
    }

    return(
        <div class="container-flex col-xxl-12 px-4 py-5 bg-white text-dark" >
            <div class="row flex-lg-row align-items-center g-5 py-5">
                <div class="col-lg-5 ">
                <h1 class="display-5 fw-bold lh-1 mb-3">Prueba nuestra aplicación en tus dispositivos moviles</h1>
                    <p>Ahora puedes descargarte nuestra aplicacion desde la apple store y play store de Google, para usarla donde quieras</p>
                </div>
                <div class="col-3 col-lg-3">
                    <img src="https://img.freepik.com/fotos-premium/mano-sujetando-telefono-celular-pantalla-blanco-aislado-sobre-fondo-blanco_104677-421.jpg" />
                </div>
                <div class="col-lg-4">
                            <button 
                                onClick={handleClick}
                                type="button" 
                                class="btn btn-outline-light w-50">
                                    <img 
                                        class="mw-100" 
                                        src="https://static.vecteezy.com/system/resources/previews/002/520/836/non_2x/download-apps-button-google-play-and-app-store-vector.jpg"
                                    />
                            </button>

                           
                </div>               
            </div>
        </div>
    )
};

export default Cta