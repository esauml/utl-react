
import { Form } from "../../components";
import { Contacto } from "../../types/Contacto";

export interface RegistrarPageInterface {
    state: Contacto[];
    dispatch: any;
}

const RegistrarPage = ({ state, dispatch }: RegistrarPageInterface) => {
    return (
        <Form state={state} dispatch={dispatch} />
    )
};

export default RegistrarPage;
