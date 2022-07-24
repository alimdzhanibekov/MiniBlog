import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import VInterSection from "@/Diractives/VInterSection";
import store from "@/store";

const app = createApp(App)

app.directive('intersection', VInterSection)

app.use(router).use(store).mount('#app')
