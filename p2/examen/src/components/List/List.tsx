import React, { memo } from "react";
import { Contacto } from "../../types/Contacto";
export interface ListInterface {
    state: any;
    dispatch?: React.Dispatch<any>;
}

const List = ({ state: contactos }: ListInterface) => {

    return (
        <>
            {
                contactos?.map((contacto: any, index: any) => (
                    <div key={index}>
                        <p>{contacto.id}</p>
                        <p>{contacto.nombre}</p>
                        <p>{contacto.apellidos}</p>
                        <p>{contacto.email}</p>
                        <p>{contacto.twitter}</p>
                        <p>{contacto.avatar}</p>
                    </div>
                ))
            }
        </>
    )
};

export default memo(List);
