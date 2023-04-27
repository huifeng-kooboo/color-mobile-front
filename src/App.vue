<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref } from 'vue';
</script>

<template>
  <div class="mainPage">
    <RouterView />
  </div>

</template>

<script lang="ts">
</script>

<style scoped>
.mainPage {
  line-height: 1.5;
}
</style>
