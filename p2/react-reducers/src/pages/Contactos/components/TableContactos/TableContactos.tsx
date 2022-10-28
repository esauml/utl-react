import React from "react";
import { contactosReducerTypes } from "../../../../reducers";

export interface TableContactosInterface {
    contactos: ContactoType[];
    dispatch: React.Dispatch<any>;
}

type ContactoType = {
    id: string,
    nombre: string,
    numero: string
}

const TableContactos = ({ contactos = [], dispatch }: TableContactosInterface) => {

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id = e.currentTarget.getAttribute("data-id");
        dispatch({
            type: contactosReducerTypes.DELETE_CONTACTO,
            payload: id
        });
    }

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
                    return (<tr key={contacto.id}>
                        <th scope="row">{contacto.id.split('-')[0]}</th>
                        <td>{contacto.nombre}</td>
                        <td>{contacto.numero}</td>
                        <td>
                            <button onClick={handleDelete} data-id={contacto.id} className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
};

export default TableContactos;
