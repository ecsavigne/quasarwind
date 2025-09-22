import { defineConfig } from 'vite'
// import { fileURLToPath } from 'node:url'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:
    {
      '@': path.resolve(__dirname, 'src'), // Define el alias @ para /src 
      src: path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      // sassVariables: path.resolve(__dirname,'node_modules/quasar/src/css/variables.sass'),
      sassVariables: true,
    }),

    // tailwinds
    tailwindcss(),

    vueDevTools(),
  ]
})