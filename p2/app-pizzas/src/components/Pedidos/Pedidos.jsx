import { Container } from '@mui/material';
import React from 'react'

// add a hr between each item of the array
// creates new array with with unique keys
const addHr = (arr) => {
    return arr.reduce((acc, item, index) => {
        if (index === 0) {
            return [item];
        }
        return [...acc, <hr key={`hr-${index}`} />, item];
    }, []);
}

const createContainer = (pedidos) => {
    const items = pedidos.map((pedido, index) => {
        const { type, quantity, payment, name, phone, address } = pedido;
        const cost = Number(quantity) * valueMaps.type[type] * valueMaps.payment[payment];

        return (
            <div key={index}>
                <p>Nombre: {name}</p>
                <p>Dirección: {address}</p>
                <p>Teléfono: {phone}</p>
                <p>Tipo de pizza: {type}</p>
                <p>Cantidad: {quantity}</p>
                <p>Forma de pago: {payment}</p>
                <p>Total a pagar: {cost}</p>
            </div>
        );
    });

    const hrs = addHr(items);

    console.log(hrs);

    return hrs;
}

const valueMaps = {
    type: {
        special: 120,
        vegie: 150,
    },
    payment: {
        credit: 1,
        paypal: 1,
    },
};

const Pedidos = ({ pedidos }) => {
    return (
        <Container>
            <h2>Pedidos</h2>
            {pedidos && pedidos.length > 0 ? createContainer(pedidos) : <p>No hay pedidos</p>}
        </Container>
    );
};

export default Pedidos;