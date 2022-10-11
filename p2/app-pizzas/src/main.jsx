import { createTheme, CssBaseline } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { AppBar } from './components/AppBar'
import ReloadPrompt from './ReloadPrompt'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReloadPrompt /> {/* <--- Vite-PWA component */}

    <CssBaseline />
    <ThemeProvider theme={theme}>
      <AppBar />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
