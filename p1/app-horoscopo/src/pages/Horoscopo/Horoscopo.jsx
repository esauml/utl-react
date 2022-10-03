
import { Button, Container, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { DatePicker, HorizontalDivider, HorizontalStack } from '../../components';
import { zodiac } from '../../data';


const Horoscopo = () => {

    const [state, setState] = React.useState({
        sign: '',
        horoscope: '',
        start: '',
        end: '',
        img: '',
    });

    const [date, setDate] = React.useState(new Date());

    const resetState = () => {
        setState({
            sign: '',
            horoscope: '',
            start: '',
            end: '',
            img: '',
        });

        setDate(new Date());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { sign, start, end, img, horoscope } = await getSign(date);

        setState({
            sign,
            start,
            end,
            img,
            horoscope,
        });

    }

    const getSign = async (dateObj) => {

        // month and day from date object
        // format two digits
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const day = dateObj.getDate().toString().padStart(2, '0');

        const monthDay = `${month}-${day}`;

        const sign = zodiac.find((e) => monthDay >= e.start && monthDay <= e.end);


        return sign;
    }


    return (
        <Container maxWidth='lg'>
            <h1>Horoscopo</h1>
            <HorizontalStack divider={<HorizontalDivider />}>

                <Box sx={{ minWidth: 230, width: 'calc(50% - 5px)' }}>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={2}>
                            <DatePicker value={date} onChange={setDate} />
                            <Button variant="contained" type="submit">Calcular</Button>
                            <Button variant="contained" type="button" onClick={resetState} color="secondary">Limpiar</Button>
                        </Stack>
                    </form>
                </Box>
                <Box>
                    <h2>Signo: <span id='signo'>{state.sign}</span></h2>
                    <p>Fecha de inicio: <span id='inicio'>{state.start}</span></p>
                    <p>Fecha de fin: <span id='termino'>{state.end}</span></p>
                    <p>Horoscopo: <span id='termino'>{state.horoscope}</span></p>
                    <img src={state.img} alt="" id='img' />
                </Box>
            </HorizontalStack>
        </Container>
    )
}


export default Horoscopo;