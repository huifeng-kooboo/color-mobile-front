<!--调色页面-->
<script setup lang="ts">
import ChoosePage from '@/components/ChoosePage.vue';
import { uploadModelFile } from '@/util/upload';
import { ref } from 'vue';
</script>

<template> 
  <div class="toningInteface">
    <van-row>
        <label style="color: black;">FBX文件显示</label>
    </van-row>
    <van-row>
        <input type="file" @change="showCurrentModel"/>
    </van-row>
    <van-row class="mainView">
        <!--模型显示区域-->
        <div class="modelContainer">
        </div>
    </van-row>
    <van-space  direction="vertical" :size="100">
    </van-space>
    <van-row>
        <van-col>
            <label style="color:black">材质</label>
        </van-col>
    </van-row>
    <van-space  direction="vertical" :size="100">
    </van-space>
    <van-row>
        <van-col>
            <label style="color:black">颜色</label>
        </van-col>
    </van-row>
    <van-row>
        <el-color-picker v-model="color" v-on:change="changeColor" />
    </van-row>

    <van-row justify="center" class="saverow">
        <van-col>
            <van-button round type="primary">保存设置</van-button>
        </van-col>
    </van-row>
    <van-row>
        <van-divider />
    </van-row>
    <!-- <van-grid clickable :column-num="2">
        <van-grid-item style="background-color: aqua;" icon="home-o" text="首页" to="/" />
        <van-grid-item style="background-color: aqua;" icon="manager" text="个人中心" to="/personalCenter" />
    </van-grid> -->
    <ChoosePage />
  </div>
</template>
<style scoped>
.modelContainer {
    height:500px;
}
</style>


<script lang="ts">
const afterRead = (file: File) => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      uploadModelFile(file);
};

const color = ref("#409EFF");

const changeColor = (current_color:string) =>{
    console.log("当前color:", current_color)
}

export default {
    components: {
    // "chrome-picker": Chrome,
  },
    methods: {
        showCurrentModel(e: Event ){
            const target = e.target as HTMLInputElement;
            const files = target.files;
      if (!files) {
        // 如果用户没有选择图片,只是点了文件上传这个按钮
        return
      }
      const inputFile = files[0];
            console.log("show model begim")
            uploadModelFile(inputFile)
            console.log("show model end")
        }
    }
}
</script>
