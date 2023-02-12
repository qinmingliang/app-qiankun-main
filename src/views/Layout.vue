<template>
  <main>
    <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <siderMenu />
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
           <!-- 二级路由 -->
        <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
  </main>
</template>

<script>

// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import siderMenu from '@/components/menu'
export default defineComponent({
  components: {
    // UserOutlined,
    // LaptopOutlined,
    // NotificationOutlined,
    siderMenu
  },
  setup() {
    return {
  
    };
  },
});
</script>

<style></style>
