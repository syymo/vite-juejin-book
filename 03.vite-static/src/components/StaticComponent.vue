<script setup lang="ts">
// import { version } from '../../package.json';
import PackageJson from '../../package.json';
console.log(PackageJson);


</script>

<template>
  <div ref="root" class="hello-world">
    <!-- <span> {{ version }} </span> -->
    <span> {{ PackageJson.name }} </span>
    
  </div>
</template>

<style scoped>
img {
  width: 240px;
}

</style>
