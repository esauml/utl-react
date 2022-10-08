import { Box, Stack } from '@mui/material';
import React from 'react'

const Resultados = ({ java, python, kotlin }) => {
    return (
        <Box sx={{ width: '50%', outline: 'solid' }} justifyContent={'center'}>
            <p>Resultados votos</p>
            <Stack direction='column' spacing={2}>
                <p>Python: {python}</p>
                <p>Java: {java}</p>
                <p>Kotlin: {kotlin}</p>
            </Stack>
        </Box>
    );
};

export default Resultados;