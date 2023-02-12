<template>
        <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          @click="onMenuClick"
          :style="{ height: '100%', borderRight: 0 }"
        >
        <template v-for="(item,index) in menuList" :key="index">
          <a-sub-menu v-if="item.children">
            <template #title>
              <span>
                <user-outlined />
                {{item.title}}
              </span>
            </template>
            <a-menu-item :key="it.path" v-for="it in item.children">{{it.title}}</a-menu-item>
          </a-sub-menu>
          <a-menu-item :key="item.path" v-else>
          <template #icon>
          <MailOutlined />
          </template>
          {{item.title}}
          </a-menu-item>
        </template>
        </a-menu>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { MailOutlined } from '@ant-design/icons-vue';
import {useRouter } from 'vue-router'
export default defineComponent({
    name: 'siderMenu',
    components: {
    MailOutlined
  },
    setup(){
      const menuList = [
        {
          title:'首页',
          path:'/home'
        },
        {
          title:'角色管理',
          path:'/system/rule'
        },
        {
          title:'配置',
          path:'/config'
        }
      ]
      const router = useRouter()
     const onMenuClick = ({ item, key, keyPath })=>{
         console.log( item, key, keyPath )
         router.push({
        path:key
    })
      }
      return {
        selectedKeys2: ref(['1']),
        openKeys: ref(['sub1']),
        onMenuClick,
        menuList
      }
    }
})
</script>

<style lang="scss" scoped>

</style>