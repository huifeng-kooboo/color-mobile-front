<template>
    <div  class="shopMain">
        <van-row style="height: 50px; background-color:#1baeae; margin-left: 0px;">
            <van-col span="8">
                <h2 class="shopHeaderTitle" style="margin:0 auto; margin-left: 30px; margin-top: 11px; font-size: 18px;" > Top1kotairy </h2>
            </van-col>
            <van-col span="1">
                <van-divider />
            </van-col>
            <van-col  span="15">
                <van-search v-model="searchContent" style="font-size: 14px;  --van-search-input-height: 30px; margin-right:20px;" shape="round" background="#1baeae" placeholder="请输入搜索关键词" />
            </van-col>
        </van-row>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
    data() {
        return {
            searchContent: ref("iphone14")
        }
    },
    beforeMount() {
        console.log("...before shop Mounted....")
    },
    methods : {
        
    }
}
</script>

<style>
.shopMain {
    color: white;
}
</style>