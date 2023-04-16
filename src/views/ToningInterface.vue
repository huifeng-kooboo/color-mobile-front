<!--调色页面-->
<script setup lang="ts">
import ChoosePage from '@/components/ChoosePage.vue';
import { uploadModelFile, modifyModelColor ,getFileFromUrl} from '@/util/upload';
import { ref } from 'vue';
import pinia from '@/store/store';
import { useTranslateStore } from '@/store/translate';
import { useStatsStore } from '@/store/stats';
</script>

<template> 
  <div class="toningInteface">
    <van-row justify="center">
        <van-pagination v-model="currentPage" :total-items="50" :show-page-size="5" style="--van-pagination-item-width: 50px;
        --van-pagination-item-default-color: #c8c8c8; --van-pagination-item-disabled-color: blue; --van-pagination-height: 40px;" @change="changePagePopModel">
            <template #prev-text>
              <van-icon name="arrow-left" style="color:black" />
            </template>
            <template #next-text>
              <van-icon name="arrow"  style="color:black" />
            </template>
            <template #page="{ text }"><h1 style="font-size:x-small; color: black;">{{dict_res[text]}}</h1></template>
        </van-pagination>
    </van-row>
    <van-row class="mainView">
        <van-col>
            <!-- 实际fbx模型存放在这里 -->
            <div class="modelContainer">
            </div>
        </van-col>
    </van-row>
    <van-space  direction="vertical" :size="50">
    </van-space>
    <van-row>
        <van-col>
            <label style="color:black">{{ materailText }}</label>
        </van-col>
    </van-row>

    <van-row>
        <el-button-group>
            <van-col>
                <el-button v-for="(item,index) in material_res" @click="clickMaterialEvent({index})" type="primary" round style=" margin-left: 10px; margin-top:10px; width: 80px; height: 25px; font-size: 10px;">{{ item }}</el-button>
            </van-col>
        </el-button-group> 
    </van-row>
    <van-space  direction="vertical" :size="30">
    </van-space>
    <van-row>
        <van-col>
            <label style="color:black">{{ colorText }}</label>
        </van-col>
    </van-row>
    <van-row justify="center">
        <el-color-picker v-model="color" v-on:change="changeColor" />
    </van-row>
    <van-row justify="center" >
        <van-tag type="primary" style="color: black; border-color: black; height: 30px; background-color: white; border-width: 2px;"> {{ color }}</van-tag>
    </van-row>

    <van-row justify="center" class="saverow">
        <van-col>
            <van-button round type="primary" style="width: 180px;" @click="saveSettingClick" >{{ saveText }}</van-button>
        </van-col>
    </van-row>
    <van-row>
        <van-divider />
    </van-row>
    <ChoosePage />
  </div>
</template>
<style scoped>
.modelContainer {
    height:300px;
}
</style>


<script lang="ts">
import * as THREE from 'three'

for (const key in THREE) {
  if (key.endsWith("Material")) {
    const material = THREE[key];
    console.log(material);
    // );
  }
}

const transInfo = useTranslateStore(pinia)
const statsInfo = useStatsStore(pinia)
console.log("dangqianzhuangtai:", transInfo.isCnState())

const saveText = transInfo.isCnState()? ref("保存设置") : ref("SAVE")
const colorText = transInfo.isCnState()? ref("颜色") : ref("COLOR")

const materailText = transInfo.isCnState()? ref("材质") : ref("MATERIAL")

const file_list = ["/test.fbx","/test1.fbx", "/test2.fbx", "/test3.fbx"]
const currentPage = ref(3)
const showPageText = ref("test")
const dict_res = ["bomo", "方型瓶子","盖子","罐子","软管","圆型瓶子"]
const material_res = ["LINEBASIC", "LINEDASH", "PET", "压克力"]
var cur_index = 0
const afterRead = (file: File) => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      uploadModelFile(file);
};

const color = ref("#409EFF");

const changeColor = (current_color:string) =>{
    console.log("当前color:", current_color)
    modifyModelColor(current_color)
}

export default {
    components: {
    // "chrome-picker": Chrome,
  },
  data() {
    return {
        current_index : 1,
    }
  },
    methods: {
        showCurrentModel(){
            console.log("当前MaterialName材质为:", statsInfo.getCurrentMaterialName())
            cur_index = cur_index + 1
            if (cur_index > 3)
            {
                cur_index = 0
            }
            getFileFromUrl(file_list[cur_index], function(inputFile: File){
                console.log("show model begim")
                uploadModelFile(inputFile)
                console.log("show model end")
            })

        },
        changePagePopModel(pageNum:number)
        {
            console.log(pageNum)
            getFileFromUrl(file_list[pageNum-1], function(inputFile: File){
                console.log("show model begim")
                uploadModelFile(inputFile)
                console.log("show model end")
            })
        },
        clickMaterialEvent(index_: number)
        {
            console.log("clicked_index: ",index_)
        },
        saveSettingClick()
        {
            console.log("保存相关配置")
        }
    },
   created() {
      this.showCurrentModel();
      if(transInfo.isCnState())
      {
        saveText.value = "保存设置";
        colorText.value = "颜色";
        materailText.value = "材质";
      }
      else{
        saveText.value = "SAVE";
        colorText.value = "COLOR";
        materailText.value = "MATERIAL";
      }
   }
}
</script>
