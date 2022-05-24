<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 1. 导入图片
import logoSrc from '@assets/imgs/vite.png';

defineProps<{ msg: string }>()

const count = ref(0)

// 方法 2
const root = ref(null);
onMounted(() => {
  // 2. 创建图片
  const img = new Image();
  // 3. 加载图片
  img.src = logoSrc;
  // 4. 添加图片到页面
  (root.value as unknown as HTMLDivElement).appendChild(img);
})
const baseUrl = new URL('./logo.png', import.meta.env.VITE_IMG_BASE_URL).href
</script>

<template>
  <div ref="root" class="hello-world">
    <h1>{{ msg }}</h1>
    <!-- 方法 1 -->
    <div class="vite-logo-div">
      <img alt="vite logo" :src="logoSrc" />
    </div>

    <img :src="baseUrl" />
  </div>
</template>

<style scoped>
img {
  width: 240px;
}
.vite-logo-div {
  padding-top: 60px;
  margin: 0 auto;
  width: 260px;
  height: 260px;
  /* 方法 3 */
  background: url('@assets/imgs/background.png') no-repeat;
}
</style>
