/**
 * main.js
 *
 * Bootstraps Vuetify, Vue Router e outros plugins, depois monta o App.
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Router
import router from '@/router' // Importa o Vue Router configurado

// Components
import App from './App.vue'


// Composables
import { createApp } from 'vue'

const app = createApp(App)

// Registra o Vue Router manualmente, caso necessário
app.use(router);

// Registra outros plugins (Vuetify, etc.)
registerPlugins(app)

app.mount('#app')
