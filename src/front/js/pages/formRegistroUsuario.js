import React from "react";
import "../styles/form_registro.css"

 
 const FormRegistroCliente = () => {
    return (
        <form class="form form-horizontal_Reg">
            <div class="form-body_Reg">
                <div class="form-group row_Reg">
                    <label class="col-md-3 label-control_Reg" for="eventRegInput1">Nombre</label>
                    <div class="col-md-9">
                        <input type="text" id="eventRegInput1" class="form-control" placeholder="Nombre" name="Nombre" ></input>
                    </div>
                </div>

                <div class="form-group row_Reg">
                    <label class="col-md-3 label-control_Reg" for="eventRegInput2">Apellido</label>
                    <div class="col-md-9">
                        <input type="text" id="eventRegInput2" class="form-control" placeholder="Apellidos" name="Apellidos" ></input>
                    </div>
                </div>
                <div class="form-group row_Reg">
                    <label class="col-md-3 label-control_Reg" for="eventRegInput3">Direccion</label>
                    <div class="col-md-9">
                        <input type="text" id="eventRegInput3" class="form-control" placeholder="Direccion" name="Direccion" ></input>
                    </div>
                </div>
                <div class="form-group row_Reg">
                    <label class="col-md-3 label-control_Reg" for="eventRegInput4">Ciudad</label>
                    <div class="col-md-9">
                        <input type="text" id="eventRegInput4" class="form-control" placeholder="Ciudad" name="Ciudad" ></input>
                    </div>
                </div>
                <div class="form-group row_Reg">
                    <label class="col-md-3 label-control_Reg" for="eventRegInput5">Codigo Postal</label>
                    <div class="col-md-9">
                        <input type="text" id="eventRegInput5" class="form-control" placeholder="Codigo Postal" name="Codigo Postal"></input>
                    </div>
                </div>
                <div class="form-group row_Reg">
                    <label class="col-md-3 label-control_Reg" for="eventRegInput6">Email</label>
                    <div class="col-md-9">
                        <input type="email" id="eventRegInput6" class="form-control" placeholder="email" name="email" ></input>
                    </div>
                </div>
                <div class="form-group row_Reg">
                    <label class="col-md-3 label-control_Reg" for="eventRegInput7">Teléfono</label>
                    <div class="col-md-9">
                        <input type="tel" id="eventRegInput7" class="form-control" name="contact" placeholder="Teléfono" ></input>
                    </div>
                </div>
            </div>
            <div class="form-actions center_form_Reg">
                <button type="button" class="btn btn-primary_form_Reg1 ">
                    <i class="feather icon-x"></i> Cancel
                </button>
                <button type="submit" class="btn btn-primary_form_Reg2" >
                    <i class="fa fa-check-square-o"></i> Save
                </button>
            </div>
        </form>

    );
};

export default FormRegistroCliente;