<template>
    <div class="shopMain">
        <van-row style="height: 50px; background-color:#1baeae; margin-left: 0px;">
            <van-col span="8">
                <h2 class="shopHeaderTitle" style="margin:0 auto; margin-left: 30px; margin-top: 11px; font-size: 18px;">
                    Top1kotairy </h2>
            </van-col>
            <van-col span="1">
                <van-divider />
            </van-col>
            <van-col span="15">
                <van-search v-model="searchContent"
                    style="font-size: 14px;  --van-search-input-height: 30px; margin-right:20px;" shape="round"
                    background="#1baeae" placeholder="请输入搜索关键词" />
            </van-col>
        </van-row>

        <van-row justify="center"
            style="background-color: white; padding: 3px; --van-dropdown-menu-height: 30px; --van-dropdown-menu-title-font-size:14px;"
            v-for="item in menuOneResultList">
            <van-col>
                <van-dropdown-menu active-color="black"
                    style=" width: 400px; --van-dropdown-menu-background:#319be1; --van-dropdown-menu-title-text-color: white;">
                    <van-dropdown-item v-model="item['id']" v-on:open="onOpenMenuOne(item['id'])" :title="item['name']"
                        :options="dropItemOptions" />
                </van-dropdown-menu>
            </van-col>
            <van-divider></van-divider>
        </van-row>

    </div>
</template>
<script lang="ts">
import pinia from '@/store/store';
import { useShopStore } from '@/store/shop/shopStore'
import { ref } from 'vue'
import { getMenuOneApi, getMenuTwoInfoByIdApi } from '@/api/shop/shop';

const shopStoreTool = useShopStore(pinia)

export default {
    name: "shopMain",
    data() {
        return {
            searchContent: ref("iphone14"),
            dropItemValue: ref("全部商品"),
            dropItemOptions: [
                {
                    text: "全部商品", value: 0
                },
                {
                    text: "全部商品1", value: 1
                },
                {
                    text: "全部商品2", value: 2
                }
            ],
            menuOneResultList: shopStoreTool.getMenuOneInfo()
        }
    },
    beforeMount() {
        if (shopStoreTool.getMenuOneInfo().length == 0)
        {
            getMenuOneApi().then((menuOneResult: { [x: string]: { [x: string]: any; }; }) => {
            console.log("【response】菜单项:", menuOneResult)
            let response_data = menuOneResult["data"]
            console.log("[response_data]", response_data)
            for (let i = 0; i < response_data.length; i++) {
                console.log(response_data[i])
                let response_value = response_data[i]
                this.menuOneResultList.push(response_value)
            }
            shopStoreTool.setMenuOneInfo(this.menuOneResultList)
        }).catch(function (error: string) {
            console.log("【response】获取菜单项失败：", error)
        });
        }
    },
    methods: {
        onOpenMenuOne(menuOneId: string) {
            console.log("menuOneId:", menuOneId)
            getMenuTwoInfoByIdApi(menuOneId).then((menuTwoResult: { [x: string]: { [x: string]: any; }; }) => {
                console.log("【response】TwoResult菜单项:", menuTwoResult)
                let response_data = menuTwoResult["data"]
                console.log("[response_data]", response_data)
                this.dropItemOptions = []
                for (let i = 0; i < response_data.length; i++) {
                    console.log(response_data[i])
                    let response_value = response_data[i]
                    let itemData = {
                        text: response_value["name"],
                        value: response_data["id"]
                    }
                    this.dropItemOptions.push(itemData)
                }
               
            }).catch( (error: string) => {
                this.dropItemOptions = []
                console.log("【response】获取菜单项失败：", error)
            });

        }
    }
}
</script>

<style>
.shopMain {
    color: white;
}</style>