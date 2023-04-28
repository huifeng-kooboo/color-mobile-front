// translate 保存当前是否是中文状态
import { defineStore } from "pinia";
import { ref } from "vue";

// 存储数据
const useTranslateStore = defineStore('translateInfo', () => {
    // 中英翻译状态保存【默认中文】
    const isCn = ref(true);

    // 中英文翻译
    function setCnTrans( isok: boolean)
    {
        isCn.value = isok;
    }

    function isCnState()
    {
        return isCn.value
    }

    // expose to out
    return {
        setCnTrans,
        isCnState,
    }
});

export { useTranslateStore };