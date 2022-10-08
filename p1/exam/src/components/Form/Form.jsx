import { Box, Button, Stack } from '@mui/material';
import React, { useState } from 'react';

const componentName = ({ handle }) => {
    const [selected, setSelected] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(selected);
        handle(selected);
    };

    const srcKotlin = "data:image/png;base64,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";
    const srcJava = "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png";
    const srcPython = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png";

    return (
        <Box sx={{ width: '50%', outline: 'solid' }}>
            <p>¿Cuál es tu lenguaje de programación favorito?</p>
            <form onSubmit={handleSubmit}>
                <Stack direction='row' spacing={2} m={2} justifyContent={'center'}>
                    <div>
                        <input type='radio' id='html' name='lenguaje' value='java' onClick={() => setSelected(1)} />
                        <label htmlFor='html'>JAVA</label>
                        <img src={srcJava} alt='java' style={{ height: '100px' }} />
                    </div>
                    <div>
                        <input type='radio' id='css' name='lenguaje' value='python' onClick={() => setSelected(2)} />
                        <label htmlFor='css'>Python</label>
                        <img src={srcPython} alt='python' style={{ height: '100px' }} />
                    </div>
                    <div>
                        <input type='radio' id='js' name='lenguaje' value='kotlin' onClick={() => setSelected(3)} />
                        <label htmlFor='js'>Kotlin</label>
                        <img src={srcKotlin} alt='kotlin' style={{ height: '100px' }} />
                    </div>
                </Stack>
                {/* Button Centered */}
                <Stack direction='row' spacing={2} m={2} justifyContent={'center'}>
                    <Button variant='contained' type='submit'>
                        Enviar
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default componentName;