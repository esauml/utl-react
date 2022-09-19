# generar service worker
npx workbox-cli wizard
npx workbox-cli generateSW workbox-config.js

# generar iconos de app
npx pwa-asset-generator favicon.png icons
### imprime en pantalla la lista de icons para agregar al manifest
### es posible que haya necesidad de cambiar la ruta

# generar manifest (EJEMPLO)
{
    "name": "MyApp",
    "short_name": "MyApp",
    "start_url": "/",
    "icons": [
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
    ],
    "theme_color": "#000000",
    "background_color": "#ffffff",
    "display": "standalone",
    "orientation": "portrait",
    "scope": "/"
}

# agregar manifest al html

# agregar service worker al html
