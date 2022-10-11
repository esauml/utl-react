# Pasos para crear la pwa

- [Pasos para crear la pwa](#pasos-para-crear-la-pwa)
  - [1. instalar el paquete](#1-instalar-el-paquete)
  - [2. crear los componentes ReloadPrompt](#2-crear-los-componentes-reloadprompt)
    - [2.1 Componente css](#21-componente-css)
    - [2.2 Componente js](#22-componente-js)
    - [2.3 Agregar el componente a main.jsx](#23-agregar-el-componente-a-mainjsx)
  - [3. crear los iconos](#3-crear-los-iconos)
  - [4. Modificar el vite.config.js](#4-modificar-el-viteconfigjs)
  - [5. Modificar el index.html](#5-modificar-el-indexhtml)
  - [6. Ejectuar el build](#6-ejectuar-el-build)
  - [7. Ejecutar el servidor](#7-ejecutar-el-servidor)

## 1. instalar el paquete

instalar con `npm i vite-plugin-pwa`

## 2. crear los componentes ReloadPrompt

Se deben poner en src/ y se deben llamar ReloadPrompt.jsx y ReloadPrompt.css

### 2.1 Componente css

```css
.ReloadPrompt-container {
    padding: 0;
    margin: 0;
    width: 0;
    height: 0;
}

.ReloadPrompt-toast {
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 16px;
    padding: 12px;
    border: 1px solid #8885;
    border-radius: 4px;
    z-index: 1;
    text-align: left;
    box-shadow: 3px 4px 5px 0 #8885;
    background-color: white;
}

.ReloadPrompt-toast-message {
    margin-bottom: 8px;
}

.ReloadPrompt-toast-button {
    border: 1px solid #8885;
    outline: none;
    margin-right: 5px;
    border-radius: 2px;
    padding: 3px 10px;
}
```

### 2.2 Componente js

```jsx
import React from 'react'
import './ReloadPrompt.css'

import { useRegisterSW } from 'virtual:pwa-register/react'

function ReloadPrompt() {
    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegistered(r) {
            // eslint-disable-next-line prefer-template
            console.log('SW Registered: ' + r)
        },
        onRegisterError(error) {
            console.log('SW registration error', error)
        },
    })

    const close = () => {
        setOfflineReady(false)
        setNeedRefresh(false)
    }

    return (
        <div className="ReloadPrompt-container">
            {(offlineReady || needRefresh)
                && <div className="ReloadPrompt-toast">
                    <div className="ReloadPrompt-message">
                        {offlineReady
                            ? <span>App ready to work offline</span>
                            : <span>New content available, click on reload button to update.</span>
                        }
                    </div>
                    {needRefresh && <button className="ReloadPrompt-toast-button" onClick={() => updateServiceWorker(true)}>Reload</button>}
                    <button className="ReloadPrompt-toast-button" onClick={() => close()}>Close</button>
                </div>
            }
        </div>
    )
}

export default ReloadPrompt
```

### 2.3 Agregar el componente a main.jsx

Se debe agregar al componente debajo de 

## 3. crear los iconos

Agrega un icono a la raiz del proyecto llamado favicon.png o "recuerda cambiar las referencias en el comando de abajo"

Recomiendo usar la herramienta pwa-asset-generator para crear los iconos

1. En terminal a la raiz del proyecto

```bash
npx pwa-asset-generator favicon.png public/icons -v icons
```

Esto agrega una carpeta llamada "icons" en public.
IMPORTANTE: También arroja un log con el array de iconos

ejemplo de log

```bash
[
  {
    "src": "icons/manifest-icon-192.maskable.png",
    "sizes": "192x192",
    "type": "image/png",
    "purpose": "any"
  },
  {
    "src": "icons/manifest-icon-192.maskable.png",
    "sizes": "192x192",
    "type": "image/png",
    "purpose": "maskable"
  },
  {
    "src": "icons/manifest-icon-512.maskable.png",
    "sizes": "512x512",
    "type": "image/png",
    "purpose": "any"
  },
  {
    "src": "icons/manifest-icon-512.maskable.png",
    "sizes": "512x512",
    "type": "image/png",
    "purpose": "maskable"
  }
]
```

## 4. Modificar el vite.config.js

crear un objeto const con la configuracion y agregar al plugin
IMPORTANTE: ver bien mis comentarios sobre los iconos y lo demás dejar igual

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const pwaOptions = {
  injectRegister: 'script',
  registerType: 'autoUpdate',
  base: '/',
  includeAssets: ['vite.svg'], // icono de app. Se encuentra en /public
  manifest: {
    name: 'Vite PWA', // nombre de la app
    short_name: 'Vite PWA', // nombre corto de la app
    theme_color: '#ffffff',
    
    // aquí va el contenido de los iconos generao
    icons: [
      {
        "src": "icons/manifest-icon-192.maskable.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "icons/manifest-icon-192.maskable.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "icons/manifest-icon-512.maskable.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "icons/manifest-icon-512.maskable.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ]
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(pwaOptions)
  ]
})
```

## 5. Modificar el index.html

Se debe agregar al html raiz unos fragementos de codigo en el head.

IMPORTANTE: aquí no va nada del manifest ni del service worker. Esto lo genera el plugin en el build

```html
<!-- icono generado que está en public/icons -->
<link rel="apple-touch-icon" href="/icons/apple-icon-180.png">

<!-- icono default que está en public -->
<link rel="mask-icon" href="/vite.svg" color="#FFFFFF">

<meta name="msapplication-TileColor" content="#FFFFFF">
<meta name="theme-color" content="#ffffff">
```

Ejemplo completo de mi html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <link rel="icon" type="image/svg+xml" href="/vite.svg">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vite + React</title>

  <!-- vite-pwa -->
  <link rel="apple-touch-icon" href="/icons/apple-icon-180.png">
  <link rel="mask-icon" href="/vite.svg" color="#FFFFFF">
  <meta name="msapplication-TileColor" content="#FFFFFF">
  <meta name="theme-color" content="#ffffff">

</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>
```

## 6. Ejectuar el build

```bash
npm run build
```

## 7. Ejecutar el servidor

Instalar servidor

```bash
npm i -g live-server
```

Ejecutar servidor

```bash
cd dist
live-server .
```
