<template>
  <div>
     home
  </div>
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

<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>