import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/EasyHireCv/',  // 🔹 Reemplaza con el nombre de tu repo en GitHub
  plugins: [react()],
})

