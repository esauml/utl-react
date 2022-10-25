import React from "react";

export interface FormularioInterface { }

const Formulario = ({ }: FormularioInterface) => {
    return (
        <div className="container">
            <label className="mx-1 d-grid gap-2">
                Nombre: {" "}
                <input type="text" className="form-control" />
            </label>
            <label className="mx-1 d-grid gap-2">
                Número: {" "}
                <input type="text" className="form-control" />
            </label>
            <button className="btn btn-primary">Agregar</button>
        </div>
    )
};

export default Formulario;
