import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React, { memo } from "react";
import { Contacto } from "../../types/Contacto";
import { avatarImgs } from "../Form/Form";
import { Link } from 'react-router-dom';

export interface ListInterface {
    state: any;
    dispatch?: React.Dispatch<any>;
}


// find value in object avatarImgs where key to search is equal to key
const avatarImg = (key: string) => Object.entries(avatarImgs).find(([k, v]) => k === key)?.[1];

const ItemCard = ({ item, key }: { item: any, key: number }) => {
    const validated = {
        isValid: true,
    }

    return (
        <Card variant="outlined" key={key} sx={{ display: 'flex', width: '400px', margin: 'auto', mb: 1 }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={avatarImg(item.avatar)}
                alt={item.twitter}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        <strong>{item.nombre}</strong> {item.apellidos}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', pb: 1, pt: 4 }}>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            <Link to={`/editar/${item.id}`} state={validated}>
                                <IconButton aria-label="twitter" size="small" sx={{ mr: 1 }}>
                                    <TwitterIcon />
                                </IconButton>
                                {item.twitter}
                            </Link>
                        </Typography>
                    </Box>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 4 }}>
                    Desarrollador de Software
                </Box>
            </Box>
        </Card>
    )
};

const List = ({ state: contactos }: ListInterface) => {
    return (
        <>
            <h1>Lista de contactos</h1>
            <Box sx={{ justifyContent: 'center' }}>
                {contactos.map((item: Contacto, key: number) => (
                    <ItemCard item={item} key={key} />
                ))}
            </Box>
        </>
    )
};

export default memo(List);
