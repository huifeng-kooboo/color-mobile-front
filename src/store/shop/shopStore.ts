// 数据保存
import { defineStore } from "pinia";
import { ref } from "vue";

const useShopStore = defineStore('ShopStore', () => {

    const menuOneInfo = ref([]);

    function setMenuOneInfo( params: [])
    {
        menuOneInfo.value = params;
    }

    function getMenuOneInfo()
    {
        return menuOneInfo.value
    }

    // expose to out
    return {
        setMenuOneInfo,
        getMenuOneInfo,
    }
});

export { useShopStore };