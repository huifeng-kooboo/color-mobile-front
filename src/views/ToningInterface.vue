<!--调色页面-->
<script setup lang="ts">
</script>

<template> 
  <div class="toningInteface">
    <van-row>
        <label style="color: black;">FBX文件显示</label>
    </van-row>
    <van-row justify="center" class="mainView">

    </van-row>

    <van-row>
        <van-col>
            <label style="color:black">材质</label>
        </van-col>
    </van-row>

    <van-row>
        <van-col>
            <label style="color:black">颜色</label>
        </van-col>
    </van-row>
    <van-row justify="center" class="saverow">
        <van-col>
            <van-button round type="primary">保存设置</van-button>
        </van-col>
    </van-row>
    <van-row>
        <van-divider />
    </van-row>
    <van-grid clickable :column-num="2">
        <van-grid-item style="background-color: aqua;" icon="home-o" text="首页" to="/" />
        <van-grid-item style="background-color: aqua;" icon="manager" text="个人中心" to="/personalCenter" />
      </van-grid>
  </div>
</template>