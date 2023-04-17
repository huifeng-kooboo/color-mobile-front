<!--fbx文件显示-->
<script setup lang="ts">
import vue3dLoader from "@/fbxutils/vue3dLoader.vue";
import {globalLoader} from "@/fbxutils/loadModel";
import pinia from "@/store/store";
import { useTranslateStore } from "@/store/translate";
</script>

<template>
    <vue3dLoader
    ref="model"
    :height="800"
    :width="390"
    :showFps="false"
    :filePath="filePath"
    :intersectRecursive="recurResult"
    v-model = "loaderInfo"
    backgroundColor="#ffffff"
    @click="onMouseMove"
    @load="onLoadModal"
    @sendmodel="onGetModal"
  ></vue3dLoader>
 
  <van-button type="primary" @click="changeHH"> 点击</van-button>
</template>
<script lang="ts">
import { ref } from "vue";
const object = ref(null);
const loaderInfo = ref("" as any)
const filePath = "/group.fbx"
const recurResult = true

import { getCurrentInstance, onMounted } from "vue"

const fbxIns = getCurrentInstance()

import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const translateInfo = useTranslateStore(pinia)

let allModel:any = translateInfo.getCurrentModal()

function onMouseMove(event: MouseEvent, intersected: any) {
console.log('event', event);
console.log(object)
 if (object.value) {
    console.log("set color","ss");
    (object.value as any).material.color.setStyle("#13ce66");
  }
  if (intersected) {
    object.value = intersected.object;
    console.log("value:",object.value);
    (object.value as any).material.color.setStyle("#13ce66");
  }
}

function onGetModal(objModel:any)
{
  allModel = objModel;
  translateInfo.setCurrentModal(objModel)
}


function onLoadModal()
{
  console.log("此时加载插件")
}
function changeHH(){

  console.log("Props-pp", globalLoader);
  if (object.value) {
    console.log("set color","ss");
    (object.value as any).material.color.setStyle("#ff0000");
  }
  console.log("test--hide");
  if(allModel != null)
  {
    console.log("hiddd");
    allModel.traverse((child) => {
       child.visible = false
    })
  }

}
export default {
    created() {
        console.log("cnn","ss");
    }
}

</script>