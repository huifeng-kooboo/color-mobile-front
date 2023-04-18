// translate 保存当前是否是中文状态
import { defineStore } from "pinia";
import { ref } from "vue";

const useTranslateStore = defineStore('translateInfo', () => {
    const isCn = ref(true);
    const currentModal = ref(null);
    const currentTabIndex = ref(3);

    // 中英文翻译
    function setCnTrans( isok: boolean)
    {
        isCn.value = isok;
    }

    function isCnState()
    {
        return isCn.value
    }


    // 保存模型
    function setCurrentModal(objModal: any)
    {
        currentModal.value = objModal;
    }
    
    function getCurrentModal()
    {
        return currentModal.value
    }

    // 保存标签选项Index
    function setCurrentTabIndex(curIndex: number)
    {
        currentTabIndex.value = curIndex;
    }

    function getCurrentTabIndex()
    {
        return currentTabIndex.value;
    }

    

    // expose to out
    return {
        setCnTrans,
        isCnState,
        setCurrentModal,
        getCurrentModal,
        setCurrentTabIndex,
        getCurrentTabIndex
    }
});

export { useTranslateStore };