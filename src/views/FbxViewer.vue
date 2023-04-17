<!--fbx文件显示-->
<script setup lang="ts">
import vue3dLoader from "@/fbxutils/vue3dLoader.vue";
import pinia from "@/store/store";
import { useTranslateStore } from "@/store/translate";
</script>

<template>

  <!--标签栏-->
  <van-row justify="center">
    <van-tabs v-model:active="bagActiveNum" @clickTab="onClickBagTab" >
      <van-tab  v-for="(item, index) in bagNameRelation" :title="item" ></van-tab>
    </van-tabs>
  </van-row>
  
  <van-row justify="center">
    <vue3dLoader
    ref="model"
    :height="300"
    :width="300"
    :showFps="false"
    :filePath="filePath"
    :intersectRecursive="recurResult"
    v-model = "loaderInfo"
    backgroundColor="#ffffff"
    @click="onClickLoader"
    @load="onLoadModel"
    @sendmodel="onGetModel"
  ></vue3dLoader>
  
  </van-row>

 
  <van-button type="primary" @click="changeHH"> 点击</van-button>
</template>
<script lang="ts">
import { ref } from "vue";

const translateInfo = useTranslateStore(pinia)

// 当前选中的Num
const bagActiveNum = ref(translateInfo.getCurrentTabIndex()); // 从配置读取

// [ToDo] 暂时放在前端，后续全存在后端处理
const bagNameRelation = ["薄膜","方型瓶子","盖子", "罐子", "软管","圆型瓶子"]

const object = ref(null);
const loaderInfo = ref("" as any)
const filePath = ref("/group.fbx")
const recurResult = true

import { getCurrentInstance, onMounted } from "vue"

const fbxIns = getCurrentInstance()

import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

let allModel:any = translateInfo.getCurrentModal()

// 点击Tab触发
function onClickBagTab(bagInfo : any)
{
   translateInfo.setCurrentTabIndex(bagActiveNum.value);
   let fbxName =  "/assets/" +  bagInfo.title + ".fbx"
   console.log("需要切换的fbxName：", fbxName) 
   filePath.value = fbxName  
}

function onClickLoader(event: MouseEvent, intersected: any) {
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

function onGetModel(objModel:any)
{
  allModel = objModel;
  translateInfo.setCurrentModal(objModel)
}


function onLoadModel()
{
  console.log("此时加载插件")
}
function changeHH(){
  if (object.value) {
    console.log("set color","ss");
    (object.value as any).material.color.setStyle("#ff0000");
  }
  console.log("test--hide");
  if(allModel != null)
  {
    console.log("hiddd");
    allModel.traverse((child: any) => {
       child.visible = false
    })
  }
}

export default {
    created() {
      bagActiveNum.value = translateInfo.getCurrentTabIndex(); // 从配置读取
    }
}

</script>