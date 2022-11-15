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
  plugins: [react(), VitePWA(pwaOptions as any)],
})
