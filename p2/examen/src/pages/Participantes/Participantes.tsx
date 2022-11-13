import { useReducer } from "react";
import { List } from "../../components";
import Reducer from "../../reducers/ContactosReducer";
import { Contacto } from "../../types/Contacto";
import { getLocalStorage } from "../../utilities/localstorage.utility";

const initialState: Contacto[] = [];
const initState = () => JSON.parse(getLocalStorage('asistentes') as string) || initialState;

const ParticipantesPage = () => {
    const [state, dispatch] = useReducer(Reducer, initState, initState);
    console.log('state', state);

    const addContacto = () => {
        const contacto = {
            id: state.contactos?.length + 1 || 1,
            nombre: 'Nombre',
            apellidos: 'Apellidos',
            email: 'email@email.com',
            twitter: '@twitter',
            avatar: 'https://picsum.photos/200/300'
        }
        dispatch({ type: 'ADD_CONTACTO', payload: contacto });
    }

    return (
        <>
            <p>
                Form
                <button onClick={() => addContacto()}>Add</button>
            </p>
            <List state={state} />
        </>
    )
};

export default ParticipantesPage;
