import React from 'react'
import { Form, Pedidos } from './components'
const App = () => {

    const [pedidos, setPedidos] = React.useState([]);

    const updatePedidos = (pedido) => {
        console.log('updatePedidos', pedido);

        setPedidos([...pedidos, pedido ]);
    }

    return (
        <>
            <hr />
            <Form updateState={updatePedidos}/>
            <hr />
            <Pedidos pedidos={pedidos}/>
        </>
    );
};

export default App