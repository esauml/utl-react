import { CheckBox } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Radio, TextField } from "@mui/material";
import { pink } from '@mui/material/colors';
import React from "react";
import { useNavigate } from "react-router-dom";
import { Contacto } from "../../types/Contacto";

export interface FormInterface {
    dispatch: React.Dispatch<any>;
    state: Contacto[];
    formState?: { id: string, nombre: string, apellidos: string, email: string, twitter: string, avatar: string };
    isEdit?: boolean;
}

export const avatarImgs = {
    avatar1: 'https://picsum.photos/id/237/200/300',
    avatar2: 'https://picsum.photos/id/238/200/300',
    avatar3: 'https://picsum.photos/id/239/200/300',
}

const Form = ({ isEdit, dispatch, state, formState = { id: '', nombre: '', apellidos: '', email: '', twitter: '', avatar: '' } }: FormInterface) => {

    // attributes mangement
    const [nombre, setNombre] = React.useState(formState.nombre);
    const [apellidos, setApellidos] = React.useState(formState.apellidos);
    const [email, setEmail] = React.useState(formState.email);
    const [twitter, setTwitter] = React.useState(formState.twitter);
    const [selectedValue, setSelectedValue] = React.useState(formState.avatar);

    const navigation = useNavigate();

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

        const contacto = {
            id: isEdit ? formState.id : (state.length + 1 || 1).toString(),
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            twitter: twitter,
            avatar: selectedValue
        }

        if (isEdit) {
            dispatch({ type: 'UPDATE_CONTACTO', payload: contacto });
        } else {
            dispatch({ type: 'ADD_CONTACTO', payload: contacto });
        }

        // reset form
        setNombre('');
        setApellidos('');
        setEmail('');
        setTwitter('');
        setSelectedValue('avatar1');

        navigation('/');
    }

    return (
        <form onSubmit={handleSubmit}>
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
                {radioAvatar('avatar1', avatarImgs.avatar1)}
                {radioAvatar('avatar2', avatarImgs.avatar2)}
                {radioAvatar('avatar3', avatarImgs.avatar3)}
            </div>

            <br /><br />
            {!isEdit &&
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
            }

            <Button>Cancel</Button>
            <Button type="submit">{isEdit ? 'Editar' : 'Registrar'}</Button>
        </form>
    );
};

export default Form;
