import { CheckBox } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Radio, TextField } from "@mui/material";
import { pink } from '@mui/material/colors';
import React from "react";

export interface FormInterface {
    stateModal: boolean;
    setStateModal: any;
    dispatch: React.Dispatch<any>;
    state: any;
}

const Form = ({ stateModal, setStateModal, dispatch, state }: FormInterface) => {
    const open = stateModal;

    const handleClickOpen = () => {
        setStateModal(true);
    };

    const handleClose = () => {
        setStateModal(false);
    };

    // attributes mangement
    const [nombre, setNombre] = React.useState('');
    const [apellidos, setApellidos] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [twitter, setTwitter] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState('avatar1');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item: string) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    const radioAvatar = (item: string, url: string) => (
        <FormControlLabel
            value={item}
            control={<Radio {...controlProps(item)} sx={{
                color: pink[800],
                '&.Mui-checked': {
                    color: pink[600],
                },
            }} />}
            labelPlacement="bottom"
            label={<img src={url} alt="avatar"
                style={{ width: '75px', height: '75px', borderRadius: '50%' }} />}
        />
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log('data', data);

        const contacto = {
            id: state.contactos?.length + 1 || 1,
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            twitter: twitter,
            avatar: selectedValue
        }
        dispatch({ type: 'ADD_CONTACTO', payload: contacto });

        // reset form
        setNombre('');
        setApellidos('');
        setEmail('');
        setTwitter('');
        setSelectedValue('avatar1');
        setStateModal(false);
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <DialogTitle>Registro de Participante</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Necesitamos la siguiente información para poder registrar tu participación en el evento.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="nombre"
                            label="Nombre"
                            type="text"
                            fullWidth
                            variant="standard"
                            name="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            id="apellidos"
                            label="Apellidos"
                            type="text"
                            fullWidth
                            variant="standard"
                            name="apellidos"
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="standard"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            id="twitter"
                            label="Twitter"
                            type="text"
                            fullWidth
                            variant="standard"
                            name="twitter"
                            value={twitter}
                            onChange={(e) => setTwitter(e.target.value)}
                        />
                        <br /><br />

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {radioAvatar('avatar1', 'https://picsum.photos/id/237/200/300')}
                            {radioAvatar('avatar2', 'https://picsum.photos/id/238/200/300')}
                            {radioAvatar('avatar3', 'https://picsum.photos/id/239/200/300')}
                        </div>

                        <br /><br />
                        <div>
                            <CheckBox
                                sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                    marginRight: '10px'
                                }}
                            />
                            <span>Acepto los términos y condiciones</span>
                        </div>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Registrar</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

export default Form;
