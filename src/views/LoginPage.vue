<script setup lang="ts">
import { ref } from 'vue';
import pinia from '@/store/store';
import { useTranslateStore } from '@/store/translate';
</script>

<template>
  <div class="wrapper">

    <!--中英翻译按钮-->
    <van-row justify="end">
      <van-col span="6"><van-switch v-model="checkLanguage" class="switch_language" @click="checkTranslate" /></van-col>
    </van-row>
    <van-space  direction="vertical" :size="150"></van-space>

    <!--公司主页Logo-->
    <van-row justify="center">
      <van-col ><img alt="Vue logo" class="logo wechatLogin" src="@/assets/login/logo.jpg" width="300"
          height="300" /></van-col>
    </van-row>
    <van-space  direction="vertical" :size="300">
    </van-space>
    
    <!-- 开始调色按钮 -->
    <van-row justify="center">
      <van-col span="8"><van-button type="primary" @click="gotoFbxViewer()" style="width:130px" round class="beginColorModify">{{ colorText }}</van-button></van-col>
    </van-row>

    <van-space  direction="vertical" :size="220">
    </van-space>

    <!--快速登录分割线-->
    <van-divider class="quickLogin">{{ loginText }}</van-divider>

    <!--微信、微博、QQ登录按钮-->
    <van-row justify="center" gutter="20">
      <van-col span="4">
        <img alt="Vue logo" class="logo wechatLogin" src="@/assets/login/wechatLogin.svg" width="30"
          height="30" />
     </van-col>
     <van-col span="4">
      <img alt="Vue logo" class="logo qqLogin" src="@/assets/login/qqLogin.svg" width="30"
      height="30" />
     </van-col>
     <van-col span="4">
      <img alt="Vue logo" class="logo weiboLogin" src="@/assets/login/weiboLogin.svg" width="30"
      height="30" />
     </van-col>
    </van-row>

    <van-space  direction="vertical" :size="220">
    </van-space>

    <!-- 公司地址 -->
    <van-row justify="center">
      <h5 style="color:black">上海鑫亮塑胶制品股份有限公司</h5>
    </van-row>
    <van-row justify="center">
      <h5 style="color: black;">shanghai xinliang plastic products,Co.ltd</h5>
    </van-row>

  </div>
</template>

<script lang="ts">
const translateInfo = useTranslateStore(pinia)
const checkLanguage = ref(translateInfo.isCnState());

const loginText = checkLanguage.value ?ref("快速登录"): ref("quick login");
const colorText = checkLanguage.value ?ref("开始调色"): ref("Start");

export default {
  methods: {
    gotoFbxViewer(){
      console.log("进入调色页面")
      this.$router.push({path: "fbxViewer"})  // 进入到调色页面
    },
    checkTranslate(){
      if(checkLanguage.value == true)
      {
        loginText.value = "快速登录"
        colorText.value = "开始调色"
        translateInfo.setCnTrans(true);
      }
      else{
        loginText.value = "Quick Log in"
        colorText.value = "    Start    "
        translateInfo.setCnTrans(false);
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
