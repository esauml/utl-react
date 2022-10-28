import React from "react";
import { contactosReducerTypes } from "../../../../reducers";

export interface TableContactosInterface {
    contactos: ContactoType[];
    dispatch: React.Dispatch<any>;
}

type ContactoType = {
    id: string,
    nombre: string,
    numero: string,
    fechaNacimiento: string,
}

const TableContactos = ({ contactos = [], dispatch }: TableContactosInterface) => {

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id = e.currentTarget.getAttribute("data-id");
        dispatch({
            type: contactosReducerTypes.DELETE_CONTACTO,
            payload: id
        });
    }

    const calculateEdad = (fechaNacimiento: string) => {
        const fechaNacimientoDate = new Date(fechaNacimiento);
        const fechaActual = new Date();

        // calculate age from birthdate and current date
        let age = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
        const month = fechaActual.getMonth() - fechaNacimientoDate.getMonth();
        if (month < 0 || (month === 0 && fechaActual.getDate() < fechaNacimientoDate.getDate())) {
            age--;
        }

        console.log(fechaNacimientoDate, fechaActual, age);
        return age;
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Número</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {contactos.map((contacto) => {
                    return (<tr key={contacto.id}>
                        <th scope="row">{contacto.id.split('-')[0]}</th>
                        <td>{contacto.nombre}</td>
                        <td>{contacto.numero}</td>
                        <td>{calculateEdad(contacto.fechaNacimiento)}</td>
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
