import { defineStore } from "pinia";
import { ref } from "vue";
import { Object3D } from 'three';
import { Rotation } from "@/util/graphics/Rotation";

const useStatsStore = defineStore('stats', () => {
    const numVertices = ref(0);
    const numTriangles = ref(0);
    const fileSize = ref(0);
    
    const startUploadTime = ref(0);
    const endUploadTime = ref(0);

    const isShowingModelStats = ref(false);

    const currentModel = ref(Object3D.prototype);

    const currentFile = ref(File.prototype);

    const currentRoatation = ref(new Rotation(22,22,22));

    function setNumVertices( vertices: number ) {
        numVertices.value = vertices;
    }

    function setNumTriangles( triangles: number ) {
        numTriangles.value = triangles;
    }

    function setFileSize( size: number ) {
        fileSize.value = size;
    }
    
    function setIsShowingModelStats( showing: boolean ) {
        isShowingModelStats.value = showing;
    }

    function startUpload() {
        startUploadTime.value = Date.now();
    }

    function endUpload() {
        endUploadTime.value = Date.now();
    }

    function getUploadTime() {
        return endUploadTime.value - startUploadTime.value;
    }

    function setCurrentModel( curModel: Object3D)
    {
        currentModel.value = curModel;
    }

    function getCurrentModel()
    {
        return currentModel.value
    }

    function setRotation(rotation_:Rotation)
    {
        currentRoatation.value = rotation_
    }

    function getRotation()
    {
        return currentRoatation.value
    }

    function setCurrentFile(file: File)
    {
        currentFile.value = file
    }

    function getCurrentFile()
    { 
        return currentFile.value
    }
    

    return {
        numVertices,
        numTriangles,
        fileSize,
        isShowingModelStats,
        setNumTriangles,
        setNumVertices,
        setFileSize,
        setIsShowingModelStats,
        startUpload,
        endUpload,
        getUploadTime,
        setCurrentModel,
        getCurrentModel,
        setRotation,
        getRotation,
        setCurrentFile,
        getCurrentFile
    }
});

export { useStatsStore };