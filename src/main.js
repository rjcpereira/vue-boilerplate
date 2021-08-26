import { createApp } from 'vue'
import app from '@/app.vue'
import '@/registerServiceWorker'
import router from '@/core/router'
import store from '@/core/store'
import components from '@/core/components'

import '@/styles/reset.scss'

const main = createApp(app);

for(let slug in components) main.component(slug, components[slug]);

main.use(store).use(router).mount('#vue-boilerplate')
