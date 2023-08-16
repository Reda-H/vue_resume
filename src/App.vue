<script setup>
import { RouterView } from 'vue-router'
import ThemeChangeWrapper from './views/ThemeChangeWrapper.vue';
</script>

<template>
  <ThemeChangeWrapper>
    <Suspense>
      <RouterView />
    </Suspense>
  </ThemeChangeWrapper>
</template>

<style scoped>
</style>
