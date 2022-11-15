import { useLocation, useParams } from "react-router-dom";
import { Form } from "../../components";
import { Contacto } from "../../types/Contacto";

export interface EditarPageInterface {
    state: Contacto[];
    dispatch: any;
}

const EditarPage = ({ state, dispatch }: EditarPageInterface) => {
    const { id } = useParams<{ id: string }>();

    // find array key where id matches
    const key = state.findIndex((contacto) => {
        return String(contacto.id) === id;
    });
    const contacto = state[key];

    return (
        <Form formState={contacto} dispatch={dispatch} state={state} isEdit={true} />
    )
};

export default EditarPage;
