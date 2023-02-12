<template>
    <div class="system">
       <div id="container"></div>
    </div>
</template>
  
<script>
import { start } from 'qiankun';
import { onMounted } from 'vue';
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        onMounted(()=>{
          if (!window.qiankunStarted) {
             window.qiankunStarted = true;
             start({
            prefetch: true, // 开启预加载
          sandbox: {
            experimentalStyleIsolation: true,
          }
        });
        }
        })
      return {
    
      };
    },
  });
</script>
  
<style>
</style>