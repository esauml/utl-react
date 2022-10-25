

const contactosReducerTypes = {
    ADD_CONTACTO: 'ADD_CONTACTO',
};

const ContactosReducer = (state: any[], action: { type: any; payload: any; }) => {
    switch (action.type) {
        case contactosReducerTypes.ADD_CONTACTO:
            return [...state, action.payload];

        default:
            return state;
    }
}

export { ContactosReducer as default, contactosReducerTypes };