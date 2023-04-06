<script setup lang="ts">
import LoginPage from './views/LoginPage.vue'
import { ref } from 'vue';
</script>

<template>
  <div class="mainPage">
    <LoginPage />
  </div>
</template>

<script lang="ts">
const checked = ref(true);
</script>

<style scoped>
.mainPage {
  line-height: 1.5;
}
</style>
