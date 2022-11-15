import { List } from "../../components";
import { Contacto } from "../../types/Contacto";

interface ParticipantesInterface {
    state: Contacto[];
    dispatch: any;
}

const ParticipantesPage = ({ state, dispatch }: ParticipantesInterface) => {

    return (
        <>
            <List state={state} />
        </>
    )
};

export default ParticipantesPage;
