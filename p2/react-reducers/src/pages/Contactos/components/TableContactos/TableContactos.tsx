import React from "react";

export interface TableContactosInterface {
    contactos: ContactoType[];
}

type ContactoType = {
    id: string,
    nombre: string,
    numero: string
}

const TableContactos = ({ contactos = [] }: TableContactosInterface) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Número</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {contactos.map((contacto) => {
                    const idFinal = typeof contacto.id;
                    console.log(idFinal);
                    return (<tr key={contacto.id}>
                        <th scope="row">{contacto.id.split('-')[0]}</th>
                        <td>{contacto.nombre}</td>
                        <td>{contacto.numero}</td>
                        <td>
                            <button className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
};

export default TableContactos;
