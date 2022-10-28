

const contactosReducerTypes = {
    ADD_CONTACTO: 'ADD_CONTACTO',
    DELETE_CONTACTO: 'DELETE_CONTACTO',
};

const ContactosReducer = (state: any[], action: { type: any; payload: any; }) => {
    switch (action.type) {
        case contactosReducerTypes.ADD_CONTACTO:
            console.log("User Added Successfully");
            return [...state, action.payload];
        case contactosReducerTypes.DELETE_CONTACTO:
            console.log("User Deleted Successfully");
            return state.filter((contacto: { id: string; }) => contacto.id !== action.payload);
        default:
            return state;
    }
}

export { ContactosReducer as default, contactosReducerTypes };