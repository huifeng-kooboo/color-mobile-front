// translate 保存当前是否是中文状态
import { defineStore } from "pinia";
import { ref } from "vue";

const useTranslateStore = defineStore('translateInfo', () => {
    const isCn = ref(true);

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
        isCnState
    }
});

export { useTranslateStore };