import { Contacto } from "../types/Contacto";

export enum reducerTypes {
    ADD_CONTACTO = "ADD_CONTACTO",
    DELETE_CONTACTO = "DELETE_CONTACTO",
    UPDATE_CONTACTO = "UPDATE_CONTACTO"
}

const Reducer = (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case reducerTypes.ADD_CONTACTO:
            console.log("User Added Successfully");
            return [...state, action.payload];
        
        case reducerTypes.DELETE_CONTACTO:
            console.log("User Deleted Successfully");
            return state.filter((contacto: { id: string; }) => contacto.id !== action.payload);
        
        case reducerTypes.UPDATE_CONTACTO:
            console.log("User Updated Successfully");
            return state.map((contacto: Contacto) => contacto.id === action.payload.id ? action.payload : contacto);
        default:
            return state;
    }
}

export default Reducer;