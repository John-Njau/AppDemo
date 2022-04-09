import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// importing css file globally
// import './assets/styles/main.css'
import './assets/styles/style.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
