import { useReducer } from "react";
import ContactosReducer from "../../reducers/ContactosReducer";
import { Formulario, TableContactos } from "./components";

export interface ContactosInterface { };

const contactos = [
    {
        id: 1,
        nombre: "Juan",
        numero: "123456789"
    },
    {
        id: 2,
        nombre: "Pedro",
        numero: "987654321"
    },
    {
        id: 3,
        nombre: "Maria",
        numero: "123456789"
    }
];

const Contactos = ({ }: ContactosInterface) => {
    const [state, dispatch] = useReducer(ContactosReducer, contactos);
    console.log(state);

    return (
        <div className="container mt-3">
            <Formulario dispatch={dispatch} />
            <TableContactos contactos={state} />
        </div>
    )
};

export default Contactos;
