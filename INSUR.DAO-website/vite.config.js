import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/INSUR.DAO-website/",
  plugins: [svelte()],
  css:{
    preprocessorOptions:{
      postcss:{
        configFilePath:'./postcss.config.js',
      },
    },
  },
})
