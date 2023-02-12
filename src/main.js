// import { createApp } from 'vue'
// import App from './App.vue'
import '@/public/system/index'
// createApp(App).use(router).mount('#app')
import { createApp } from 'vue'
import router from '@/router/index.js';
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import "default-passive-events"
// import { Button, message } from 'ant-design-vue';
createApp(App).use(router).use(Antd).mount('#app')
