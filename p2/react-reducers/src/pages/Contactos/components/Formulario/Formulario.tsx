import { contactosReducerTypes as types } from "../../../../reducers";
import { v4 as uuid } from "uuid";
import { useState } from "react";

export interface FormularioInterface {
    dispatch: dispatchType;
};

type dispatchType = (action: actionType) => void;
type actionType = { type: string, payload: any };

const Formulario = ({ dispatch }: FormularioInterface) => {

    const [data, setData] = useState({ nombre: "", numero: "" });
    const { nombre, numero } = data;

    console.log(data);

    const actionAdd = {
        type: types.ADD_CONTACTO,
        payload: {
            id: uuid(),
            nombre: nombre,
            numero: numero
        }
    }

    const handleClick = () => {
        dispatch(actionAdd);
    }

    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <div className="container m-2">
            <label className="mx-1 d-grid gap-2">
                Nombre: {" "}
                <input type="text" className="form-control" onChange={handleChange} value={nombre} name='nombre' />
            </label>
            <label className="mx-1 d-grid gap-2">
                Número: {" "}
                <input type="text" className="form-control" onChange={handleChange} value={numero} name='numero' />
            </label>
            <label className="mx-1 my-1 d-grid gap-2">
                <button className="btn btn-primary" onClick={handleClick}>Agregar</button>
            </label>
        </div>
    )
};

export default Formulario;
