import React, {Fragment, useState } from "react";


import ModalProfesiones from '../component/ModalProfesiones';
import '../../styles/formulario.css'
export const PublicarAnuncio = () => {

  
    


  const [datos, setDatos] = useState({
    nombre: '',
    profesion: '',
    anuncio: '',
    precio:'',
    codigoPostal: '',
})

const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
}

const enviarDatos = (event) => {
    event.preventDefault()
    console.log('enviando datos...' + datos.nombre + ' ' + datos.profesion + ' ' + datos.anuncio + ' ' + datos.precio + ' ' + datos.codigoPostal)
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(datos);

var requestOptions = {
method: 'POST',
headers: myHeaders,
body: raw,
redirect: 'follow'
};

fetch(process.env.BACKEND_URL + "/api/publicarAnuncio", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
}
  return (
    <Fragment>
            <h1>Formulario de anuncio</h1>
            <div className='container d-flex justify-content-center align-items-center'>
            <form className="formulario" onSubmit={enviarDatos}>
                <div className="">
                    <input id='name' type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="">
                    <input id='profession' type="text" placeholder="Profesion" className="form-control" onChange={handleInputChange} name="profesion"></input>
                </div>
                <div className="">
                    <input id='zipcode' type="text" placeholder="Codigo postal" className="form-control" onChange={handleInputChange} name="codigoPostal"></input>
                </div>
                <div className="">
                    <input id='price' type="text" placeholder="Precio por hora" className="form-control" onChange={handleInputChange} name="precio"></input>
                </div>
                <div className="">
                    <textarea id='announce' rows="5" cols="30" type="text" placeholder="Anuncio" className="form-control" onChange={handleInputChange} name="anuncio"></textarea>
                </div>
               
                <button type="submit" className="btn btn-primary botonEnviar">Enviar</button>
            </form>
            </div>
            {/* <ul>
                <li>Tu anuncio</li>
                <li>{datos.nombre}</li>
                <li>{datos.profesion}</li>
                <li>{datos.anuncio}</li>
                <li>{datos.codigoPostal}</li>
                <li>{datos.precio}</li>

            </ul> */}
            <div className='container cardAnuncioEjemplo'>
            {/* <Card style={{ width: '18rem' }} className='cardAnuncio'>
      <Card.Body>
        <Card.Title className='tituloCard'>{datos.profesion}</Card.Title>
        <Card.Text className='anuncio'>
          {datos.anuncio}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush datosCard">
        <ListGroup.Item>{datos.nombre}</ListGroup.Item>
        <ListGroup.Item>{datos.codigoPostal}</ListGroup.Item>
        <ListGroup.Item>{datos.precio}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <button>Enviar mensaje</button>
      </Card.Body>
    </Card> */}
    
    <h2>Previsualiza tu anuncio</h2>
    
    <div className="col-2 card m-2" style={{ backgroundColor: "#ffface" }}>
        <div className="card-body cardAnuncio">
          <h5 className="card-title tituloCard">{datos.profesion}</h5>
          <p className="card-text text-dark anuncio">
          {datos.anuncio}
          </p>
          
      <ul className="datosCard">
        <li>{datos.nombre}</li>
        <li>{datos.codigoPostal}</li>
        <li>{datos.precio}</li>
      </ul>
      
          <ModalProfesiones />
        </div>
      </div>
    </div>
            

        </Fragment>
  );
};
