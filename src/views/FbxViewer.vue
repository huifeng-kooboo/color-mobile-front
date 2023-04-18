<!--fbx文件显示-->
<script setup lang="ts">
import vue3dLoader from "@/fbxutils/vue3dLoader.vue";
import pinia from "@/store/store";
import { useTranslateStore } from "@/store/translate";
import { ref, watch } from "vue";
import { getCurrentInstance, onMounted } from "vue"
import ChoosePage from '@/components/ChoosePage.vue';
</script>

<template>

  <!-- 标签栏 -->
  <van-row justify="center">
    <van-tabs v-model:active="bagActiveNum" @clickTab="onClickBagTab" >
      <van-tab  v-for="(item, index) in bagNameRelation" :title="item" ></van-tab>
    </van-tabs>
  </van-row>

  <!-- 模型展示部分 -->
  <van-row justify="center">
    <vue3dLoader
    ref="model"
    :height="300"
    :width="300"
    :showFps="false"
    :filePath="filePath"
    :intersectRecursive="recurResult"
    backgroundColor="#ffffff"
    @click="onClickLoader"
    @load="onLoadModel"
    @sendmodel="onGetModel"
  ></vue3dLoader>
  </van-row>

  <!-- 材质部分 -->
  <van-row>
    <label style="font-size: 14px; color: black">{{ materialText }}</label>
  </van-row>
  
  <van-row style="margin-top: 5px; " justify="center">
    <van-button v-for="(item, index) in bagMaterialRelation[bagActiveNum.valueOf()]" plain type="primary" round style="width: 80px; height: 24px; color: #878787; border-color: #878787; font-size: 12px; margin-right: 10px; margin-bottom: 10px;"> {{ item }}</van-button>  
  </van-row>

  <!-- 颜色部分 -->
  <van-row>
    <label style="font-size: 14px; color: black">{{ colorText }}</label>
  </van-row>

  <van-row justify="center" style="margin-top: 10px; ">
    <color-picker v-model:pureColor="pureColor" v-model:gradientColor="gradientColor"  :pureColorChange="colorChange"  pickerType="chrome"/>
  </van-row>

  <van-row justify="center">
    <van-button type="primary" style="margin-top: 10px; font-size: 12px; width: 130px; height: 30px; margin-bottom: 10px;" round  > 保存设置 </van-button>
  </van-row>

  <ChoosePage />
  <!-- <van-button type="primary" @click="changeHH"> 点击</van-button>> -->
</template>
<script lang="ts">

 const pureColor = ref("#ff0000")
const gradientColor = ref("linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)");

const translateInfo = useTranslateStore(pinia)

const widgetShow = ref(true)

// 中英部分
const materialText = ref("材质")
const colorText = ref("颜色")


// 当前选中的Num
const bagActiveNum = ref(translateInfo.getCurrentTabIndex()); // 从配置读取

// [ToDo] 暂时放在前端，后续全存在后端处理
const bagNameRelation = ["薄膜","方型瓶子","盖子", "罐子", "软管","圆型瓶子"]
const bagMaterialRelation = [ ["EVA膜","HDPE","CDPE","PP膜"], ["PE","PP瓶","LDPE","HDPE","PET瓶","PETG"], ["ABS","PP","PETG"], ["PP罐","AS.ABS", "PET"], ["HDPE","LDPE","PP管"], ["PE","PP瓶","LDPE","HDPE","PET瓶","PETG"] ];

// 配置文件
// const object = ref(null);
const filePath = ref("/group.fbx")
const recurResult = true

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
  console.log("[DEBUG_INFO] click the loader")
// console.log('event', event);
// console.log(object)
//  if (object.value) {
//     console.log("set color","ss");
//     (object.value as any).material.color.setStyle("#13ce66");
//   }
//   if (intersected) {
//     object.value = intersected.object;
//     console.log("value:",object.value);
//     (object.value as any).material.color.setStyle("#13ce66");
//   }
}

function onGetModel(objModel:any)
{
  console.log("[SUCCESS] get success info")
  allModel = objModel;
  translateInfo.setCurrentModal(objModel)
}


function onLoadModel()
{
  console.log("[DEBUG_INFO] loading model")
}


function colorChange()
{
  console.log("color__",pureColor);
  console.log("颜色发生改变", pureColor.value);
}

function colorChange2(dcorlo: any)
{
  console.log("colorChange2__",dcorlo);
  console.log("colorChange2颜色发生改变", pureColor.value);
}

watch(pureColor,(newValue, oldValue)=>{
  console.log("新值是"+newValue, "旧址是"+oldValue);
  const myModel = translateInfo.getCurrentModal()
  if (myModel != null)
  {
    console.log("hiddd");
    myModel.traverse((child: any) => {
      if(child.isMesh)
      {
        child.material.color.setStyle(newValue)
      }

    })
  }
})
// export default {
//     created() {
//       bagActiveNum.value = translateInfo.getCurrentTabIndex(); // 从配置读取
//       materialText.value = translateInfo.isCnState()? "材质" : "MATERIAL";
//       colorText.value = translateInfo.isCnState()? "颜色" : "COLOR";
//     }
//     watch(pureColor.valueOf(), (newValue, oldValue) =>{

//     }), 
// }

</script>