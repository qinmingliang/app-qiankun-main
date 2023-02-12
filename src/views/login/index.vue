<template>
  <div>
    <a-layout>
    <!-- <a-layout-header></a-layout-header> -->
    <a-layout-content>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>
    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
    </a-form>
    </a-layout-content>
    <a-layout-footer></a-layout-footer>
  </a-layout>
  </div>
   
</template>

<script>
import {reactive, onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from 'vue'
import {useRouter } from 'vue-router'
export default {
  name:'myLogin',
  data(){
    return {
        userName:'',
        passWord:''
    }
  },
  setup(){
    const formState = reactive({
      username: '',
      password: '',
      remember: true,
    });
    const router = useRouter()
    const onFinish = values => {
      localStorage.setItem('system_token',values.username+values.password)
      router.push({
        name:'home'
    })
    };
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

      // 函数
      onBeforeMount(()=>{
            console.log("---onBeforeMount---")
        })
        onMounted(()=>{
            console.log("---onMounted---")
        })
        onBeforeUpdate(()=>{
            console.log("---onBeforeUpdate---")
        })
        onUpdated(()=>{
            console.log("---onUpdated---")
        })
        onBeforeUnmount(()=>{
            console.log("---onBeforeUnmount---")
        })
        onUnmounted(()=>{
            console.log("---onUnmounted---")
        })
    return {   
      formState,
      onFinish,
      onFinishFailed,}
  }
}
</script>

<style>

</style>