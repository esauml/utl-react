import { useEffect, useReducer, useState } from "react";
import ContactosReducer from "../../reducers/ContactosReducer";
import { getLocalStorage } from "../../utilities/localstorage.utility";
import { Formulario, TableContactos } from "./components";

export interface ContactosInterface { };

const initialState = () => JSON.parse(getLocalStorage("contactos") as any) || [];

const Contactos = ({ }: ContactosInterface) => {
    const [state, dispatch] = useReducer(ContactosReducer, [], initialState);

    // state to handle the form to appear or not
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        localStorage.setItem("contactos", JSON.stringify(state));
    }, [state]);

    return (
        <div className="container mt-3">
            <button className="btn btn-success" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Ocultar Formulario" : "Agregar Contacto"}
            </button>
            {showForm && <Formulario dispatch={dispatch} />}

            <TableContactos contactos={state} dispatch={dispatch} />
        </div>
    )
};

export default Contactos;
