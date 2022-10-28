import { contactosReducerTypes as types } from "../../../../reducers";
import { v4 as uuid } from "uuid";
import { useState } from "react";

export interface FormularioInterface {
    dispatch: dispatchType;
};

type dispatchType = (action: actionType) => void;
type actionType = { type: string, payload: any };

const Formulario = ({ dispatch }: FormularioInterface) => {

    const [data, setData] = useState({ nombre: "", numero: "", genero: "", fechaNacimiento: "", imgSrc: "" });
    const { nombre, numero, genero, fechaNacimiento, imgSrc } = data;

    console.log(data);

    const actionAdd = {
        type: types.ADD_CONTACTO,
        payload: {
            id: uuid(),
            ...data
        }
    }

    const handleSubmit = () => {
        dispatch(actionAdd);
        // clean state
        setData({ nombre: "", numero: "", genero: "", fechaNacimiento: "", imgSrc: "" });
    }

    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const phoneRegex = "^(\+\d{1,3}[- ]?)?\d{10}$";

    return (
        <div className="container m-2" onSubmit={handleSubmit}>
            <form>
                <label className="mx-1 d-grid gap-2">
                    Nombre: {" "}
                    <input type="text" className="form-control" onChange={handleChange} value={nombre} name='nombre' required />
                </label>
                <label className="mx-1 d-grid gap-2">
                    Número: {" "}
                    <input type="text" pattern={phoneRegex} className="form-control" onChange={handleChange} value={numero} name='numero' required />
                </label>
                {/* select input. The options are hombre, mujer u otro */}
                <label className="mx-1 d-grid gap-2">
                    Género: {" "}
                    <select className="form-select" onChange={handleChange} value={genero} name='genero' required>
                        <option value="" disabled>Selecciona un género</option>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                        <option value="otro">Otro</option>
                    </select>
                </label>
                <label className="mx-1 d-grid gap-2">
                    Fecha de Nacimiento: {" "}
                    <input type="date" className="form-control" onChange={handleChange} value={fechaNacimiento} name='fechaNacimiento' required />
                </label>
                <label className="mx-1 d-grid gap-2">
                    Imagen: {" "}
                    <input type="text" className="form-control" onChange={handleChange} value={imgSrc} name='imgSrc' required />
                </label>
                <label className="mx-1 my-1 d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Agregar</button>
                </label>
            </form>
        </div>
    )
};

export default Formulario;
