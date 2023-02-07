import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

const PaginacompletarPerfil =() =>{
  return (
    <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='Nombre' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Apellidos' />
        </MDBCol>
      </MDBRow>
      <MDBInput wrapperClass='mb-4' id='form6Example4' label='Ciudad' />
      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Codigo Postal' />
      
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Telefono' />

      <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Informacion adicional' />


      <MDBBtn className='mb-4' type='submit' block>
        Completar Perfil
      </MDBBtn>
    </form>
  );
}

export default PaginacompletarPerfil