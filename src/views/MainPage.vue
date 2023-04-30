<!-- 主页部分 -->
<script setup lang="ts">
import { ref } from 'vue';
import pinia from '@/store/store';
import { useTranslateStore } from '@/store/translate';
import { uploadFileApi } from '@/api/service/upload';
</script>

<template>
  <div class="wrapper">
    <van-space direction="vertical" :size="200"></van-space>

    <!--Logo-->
    <van-row justify="center">
      <van-col><img alt="Logo" class="logo" src="@/assets/login/dtube.png" width="350" height="400" /></van-col>
    </van-row>
    <van-space direction="vertical" :size="400">
    </van-space>
    <van-space direction="vertical" :size="400">
    </van-space>

    <van-row justify="center">
      <van-col>
        <van-uploader v-model="fileList">
          <van-button type="primary" icon="plus" style="width:130px" round class="beginColorModify">{{ chooseText }}
          </van-button>
        </van-uploader>

      </van-col>
    </van-row>
    <van-space direction="vertical" :size="100">
    </van-space>
    <van-divider class="quickLogin">选择</van-divider>
    <van-space direction="vertical" :size="100">
    </van-space>
    <van-row justify="center">
      <van-button type="primary" @click="updateFile()" style="width:130px" round class="beginColorModify">{{ uploadText }}
      </van-button>
    </van-row>

    <van-space direction="vertical" :size="300">
    </van-space>

    <!--提示分割线-->
    <van-divider class="quickLogin">{{ tipText }}</van-divider>

  </div>
</template>

<script lang="ts">
const translateInfo = useTranslateStore(pinia)
import useClipboard from "vue-clipboard3"
import { showToast } from 'vant'
const { toClipboard } = useClipboard()
const checkLanguage = ref(translateInfo.isCnState());
const tipText = checkLanguage.value ? ref("上传你的文件") : ref("Upload Your File");
const uploadText = checkLanguage.value ? ref("一键上传") : ref("Upload");
const chooseText = checkLanguage.value ? ref("选择文件") : ref("Upload");
const fileList = ref([]);


export default {
  methods: {
    updateFile() {
      if (fileList.value.length < 1) {
        console.log("【request】error,当前无文件需要上传....")
        showToast("当前未选择文件")
        return
      }
      else {
        console.log("【info】upload_file_size: ", fileList.value.length)
        uploadFileApi({
          "oss_file": fileList.value[0]["file"]
        }).then(function (uploadResult: { [x: string]: { [x: string]: any; }; }) {
          var downloadUrl = uploadResult["data"]["download_url"]
          console.log("【response】返回的结果数据为:", uploadResult)
          console.log("【response】下载链接为:", downloadUrl)
          toClipboard(downloadUrl)
          console.log("【response】url复制成功")
          showToast("上传成功，可以粘贴哈！")
        }).catch(function (error: string) {
          console.log("【response】文件上传失败：", error)
        });
      }

    }
  }
}
</script>

<style scoped>
.quickLogin {
  --van-divider-border-color: rgb(231, 231, 231);
  border-color: black;
}
</style>
