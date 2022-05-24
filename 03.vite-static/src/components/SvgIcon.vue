<script setup lang="ts">
/// <reference types="vite-svg-loader" />
interface SvgIconProps {
  name?: string;
  prefix: string;
  color: string;
  [key: string]: string;
}

const props = withDefaults(defineProps<SvgIconProps>(), {
  prefix: 'icon',
  color: '#333',
})
const symbolId = `#${props.prefix}-${props.name}`;

</script>

<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<style scoped>

</style>
