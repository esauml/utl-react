import { useReducer, useState } from "react";
import { Form, List } from "../../components";
import Reducer from "../../reducers/ContactosReducer";
import { Contacto } from "../../types/Contacto";
import { getLocalStorage } from "../../utilities/localstorage.utility";

const initialState: Contacto[] = [];
const initState = () => JSON.parse(getLocalStorage('asistentes') as string) || initialState;

const ParticipantesPage = () => {
    const [state, dispatch] = useReducer(Reducer, initState, initState);
    const [stateModal, setStateModal] = useState(false);
    console.log('state', state);

    return (
        <>
            <Form state={state} dispatch={dispatch} stateModal={stateModal} setStateModal={setStateModal} />
            <List state={state} />
        </>
    )
};

export default ParticipantesPage;
