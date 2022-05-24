<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ImageComponent from './components/ImageComponent.vue'
import SvgComponent from './components/SvgComponent.vue'
import StaticComponentVue from './components/StaticComponent.vue';

</script>

<template>
  <ImageComponent msg="Hello Vue 3 + TypeScript + Vite" />
  <SvgComponent />
  <StaticComponentVue />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
