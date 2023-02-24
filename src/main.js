import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from './store/store'

const vuetify =  createVuetify({
    components,
    directives
})


createApp(App).use(store).use(vuetify).mount('#app')
