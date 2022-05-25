<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import IconComponent from '@assets/icons/logo.svg?component';
import SvgIcon from './SvgIcon.vue';

const icons = import.meta.globEager('@assets/icons/logo-*.svg');
const iconUrls = Object.keys(icons).map((mod) => {
  // 如 ../../assets/icons/logo-1.svg -> logo-1
  const fileName = mod.split('/').pop();
  const [svgName] = (fileName as string).split('.');
  return svgName;
});

</script>

<template>
  <div ref="root" class="hello-world">
    <span> svg components </span>
    <!-- <IconComponent /> -->
    <SvgIcon v-for="icon in iconUrls" :name="icon" :key="icon" width="50" height="50"></SvgIcon>
  </div>
</template>

<style scoped>
img {
  width: 240px;
}

</style>
