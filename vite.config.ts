import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    
    VitePWA({
      registerType:"autoUpdate",
      manifest:{
        name: "Harshith Basa's Portfolio",
        short_name: "Harshith's",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        scope: "/portfolio",
        start_url: "/portfolio"
      }
    })
  ],
  base:"/portfolio/",
})
