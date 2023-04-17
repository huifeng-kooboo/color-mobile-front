<!--fbx文件显示-->
<script setup lang="ts">
import ChoosePage from '@/components/ChoosePage.vue'
</script>

<template>
    <vue3dLoader
    :height="800"
    width="390"
    :showFps="true"
    :filePath="filePath"
    backgroundColor="#ffffff"
    @mousemove="onMouseMove"
    :cameraPosition="{ x: 0, y: 0, z: -2500 }"
  ></vue3dLoader>
</template>
<script lang="ts">
import { ref } from "vue";
const object = ref(null);
const filePath = "/guanzi.fbx"

function onMouseMove(event: MouseEvent, intersected: any) {
console.log('event', event);
console.log(object)
 if (object.value) {
    console.log("set color","ss");
    (object.value as any).material.color.setStyle("#fff");
  }
  if (intersected) {
    console.log("设置参数")
    object.value = intersected.object;
    (object.value as any).material.color.setStyle("#13ce66");
  }
}
export default {
    created() {
        console.log("cnn","ss");
    }
}

</script>