import { Button, Container, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Stack } from '@mui/system';
import React, { useState } from 'react';


const Form = ({ updateState }) => {

    const [type, setType] = useState('')
    const [payment, setPayment] = useState('')

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('submit');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        // console.log(data);

        const { type, quantity, payment, name, phone, address } = data;

        // clean the form
        e.target.reset();

        updateState({ type, quantity, payment, name, phone, address });
    }

    return (
        <Container>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 160 }}>
                            <InputLabel id="demo-simple-select-label">Tipo de pizza</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='type'
                                value={type}
                                label="Tipo de Pizza"
                                onChange={handleTypeChange}
                            >
                                <MenuItem value={'special'} selected>Especial $120</MenuItem>
                                <MenuItem value={'vegie'}>Vegetariana $150</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div>
                        <label htmlFor="quantity">Cantidad</label>
                        <br />
                        <TextField type='number' name='quantity' id="quantity" label="quantity" variant="outlined" size="small" />
                    </div>

                    <div>
                        <FormControl sx={{ m: 1, minWidth: 160 }}>
                            <InputLabel id="demo-simple-select-label">Tipo pago</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='payment'
                                value={payment}
                                label="Tipo de pago"
                                onChange={handlePaymentChange}
                            >
                                <MenuItem value={'credit'}>Tarjeta de crédito</MenuItem>
                                <MenuItem value={'paypal'}>Pago con Paypal</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div>
                        <label htmlFor="name">Nombre</label>
                        <br />
                        <TextField type='text' name='name' id="name" label="name" variant="outlined" size="small" />
                    </div>

                    <div>
                        <label htmlFor="phone">Teléfono</label>
                        <br />
                        <TextField type='text' name='phone' id="phone" label="phone" variant="outlined" size="small" />
                    </div>

                    <div>
                        <label htmlFor="address">Dirección</label>
                        <br />
                        <TextField type='text' name='address' id="address" label="address" variant="outlined" size="small" />
                    </div>

                    <Button type="submit" variant="contained">Enviar</Button>
                </Stack>
            </form>
        </Container>
    );
};

export default Form;