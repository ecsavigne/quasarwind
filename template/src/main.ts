import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
import '@quasar/extras/material-symbols-sharp/material-symbols-sharp.css'
import '@quasar/extras/mdi-v7/mdi-v7.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import '@quasar/extras/eva-icons/eva-icons.css'
import '@quasar/extras/themify/themify.css'
import '@quasar/extras/line-awesome/line-awesome.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'
import './css/app.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
// /home/ecs/Mis_Repos/skuSyncAll/vite_quasar/quasarProjectTailwind/node_modules/quasar/src/css
// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'

const appMain = createApp(App)
// Assumes you have a <div id="app"></div> in your index.html


appMain.use(Quasar)
appMain.use(router)

const pinia = createPinia()
appMain.use(pinia)

appMain.mount('#app')


