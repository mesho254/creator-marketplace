import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.mount('#app')

// Initialize AOS after mount
app.mixin({
  mounted() {
    AOS.init({ duration: 900, once: true })
  }
})