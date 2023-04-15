<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
  <div class="wrapper">
    <van-row justify="end">
      <van-col span="6"><van-switch v-model="checked" class="switch_language" /></van-col>
    </van-row>
    <van-space  direction="vertical" :size="150"></van-space>
    <van-row justify="center">
      <van-col ><img alt="Vue logo" class="logo wechatLogin" src="@/assets/login/logo.jpg" width="300"
          height="300" /></van-col>
    </van-row>
    <van-space  direction="vertical" :size="300">
    </van-space>
    <van-row justify="center">
      <van-col span="8"><van-button type="primary" @click="gotoMainPage()" round class="beginColorModify"> 开始调色 </van-button></van-col>
    </van-row>
    <van-space  direction="vertical" :size="220">
    </van-space>

    <van-divider class="quickLogin">快速登录</van-divider>
    <!--三个登录按钮的图标-->
    <van-row justify="center">
      <van-col span="8"><img alt="Vue logo" class="logo wechatLogin" src="@/assets/login/wechatLogin.svg" width="30"
          height="30" /></van-col>
      <van-col span="8"><img alt="Vue logo" class="logo qqLogin" src="@/assets/login/qqLogin.svg" width="30"
          height="30" /></van-col>
      <van-col span="8"><img alt="Vue logo" class="logo weiboLogin" src="@/assets/login/weiboLogin.svg" width="30"
          height="30" /></van-col>
    </van-row>

  </div>
</template>

<script lang="ts">
const checked = ref(true);
export default {
  methods: {
    gotoMainPage(){
      console.log("go to toningInterface")
      this.$router.push({path: "toningInterface"})  // 进入到主页
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
