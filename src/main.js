import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import gather from './plugins/gather'

import './assets/main.scss'

const app = createApp(App)

app.use(router)
app.use(gather);

app.mount('#app')
