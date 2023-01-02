import React from "react";
import "../../styles/formregCliente.css"

 
 const FormRegistroCliente = () => {
    return (
        <form class="form form-horizontal">
            <div class="form-body">
                <div class="form-group row">
                    <label class="col-md-3 label-control" for="eventRegInput1">Nombre</label>
                    <div class="col-md-9">
                        <input type="text" id="eventRegInput1" class="form-control" placeholder="Nombre" name="Nombre" fdprocessedid="acx3jw"></input>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-md-3 label-control" for="eventRegInput2">Apellido</label>
                    <div class="col-md-9">
                        <input type="text" id="eventRegInput2" class="form-control" placeholder="Apellidos" name="Apellidos" fdprocessedid="edgd"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-md-3 label-control" for="eventRegInput3">Direccion</label>
                    <div class="col-md-9">
                        <input type="text" id="eventRegInput3" class="form-control" placeholder="Direccion" name="Direccion" fdprocessedid="6nw0nj"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-md-3 label-control" for="eventRegInput4">Ciudad</label>
                    <div class="col-md-9">
                        <input type="text" id="eventRegInput4" class="form-control" placeholder="Ciudad" name="Ciudad" fdprocessedid="5mv0ph"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-md-3 label-control" for="eventRegInput5">Codigo Postal</label>
                    <div class="col-md-9">
                        <input type="text" id="eventRegInput5" class="form-control" placeholder="Codigo Postal" name="Codigo Postal" fdprocessedid="jmnh5p"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-md-3 label-control" for="eventRegInput6">Email</label>
                    <div class="col-md-9">
                        <input type="email" id="eventRegInput6" class="form-control" placeholder="email" name="email" fdprocessedid="t6xdkc"></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-md-3 label-control" for="eventRegInput7">Teléfono</label>
                    <div class="col-md-9">
                        <input type="tel" id="eventRegInput7" class="form-control" name="contact" placeholder="Teléfono" fdprocessedid="n1adw"></input>
                    </div>
                </div>
            </div>
            <div class="form-actions center">
                <button type="button" class="btn btn-warning mr-1" processedid="7gy4tk">
                    <i class="feather icon-x"></i> Cancel
                </button>
                <button type="submit" class="btn btn-primary" processedid="fzyf5">
                    <i class="fa fa-check-square-o"></i> Save
                </button>
            </div>
        </form>

    );
};

export default FormRegistroCliente;