<!--调色页面-->
<script setup lang="ts">
</script>

<template> 
  <div class="toningInteface">
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
        <van-grid-item icon="home-o" text="首页" to="/" />
        <van-grid-item icon="search" text="个人中心" url="https://github.com" />
      </van-grid>
  </div>
</template>