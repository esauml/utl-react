import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import React from 'react';
import { Form, Pedidos } from './components';


const App = () => {
    const [pedidos, setPedidos] = React.useState([]);

    const updatePedidos = (pedido) => {
        console.log('updatePedidos', pedido);
        setPedidos([...pedidos, pedido]);
    }

    return (
        <>
            <Stack mt={2} direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                <Form updateState={updatePedidos} />
                <Pedidos pedidos={pedidos} />
            </Stack>
        </>
    );
};

export default App