// import reactLogo from './assets/react.svg'
// import './App.css'
import { Box, Button, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { Container, Form, Header, Resultados } from './components'

function App() {

  const [java, setJava] = useState(0);
  const [python, setPyton] = useState(0);
  const [kotlin, setKotlin] = useState(0);

  const handleSubmit = (selected) => {

    console.log(selected);

    if (selected === 1) setJava(java + 1);
    if (selected === 2) setPyton(python + 1);
    if (selected === 3) setKotlin(kotlin + 1);
  }

  return (
    <>
      {/* Header fixed top and full width. Height 15%. Content centered  */}
      <Header />
      <Container>
        <Stack direction='row' spacing={2} mt={2}>
          <Form handle={handleSubmit} />
          <Resultados java={java} kotlin={kotlin} python={python} />
        </Stack>
      </Container>
    </>
  )
}

export default App
