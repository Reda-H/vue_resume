<script>
import { RouterView } from 'vue-router'
import ThemeChangeWrapper from './views/ThemeChangeWrapper.vue';

// $sendBrowserMetadata();
export default {
  mounted() {
    this.$sendBrowserMetadata();
  }
}

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
./plugins/gather