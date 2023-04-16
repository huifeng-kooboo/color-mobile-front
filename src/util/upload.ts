import { getAssociatedLoader } from './loaders/loader';
import { InvalidFileExtensionError } from './InvalidFileExtensionError';
import { onModelLoaded } from './graphics/GraphicsBundle';
import { useStatsStore } from '../store/stats';
import type { Object3D } from 'three';

const VALID_FILE_EXTENSIONS = [
    "obj",
    "fbx",
    "gltf",
    "glb",
    "3dm",
    "ply",
    "stl",
    "FBX"
];

function getFileFromUrl(url: string, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
   // xhr.setRequestHeader("User-Agent","Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    xhr.responseType = 'blob'; // 指定返回类型为二进制对象\
    xhr.onload = function() {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const fileName = getFileNameFromUrl(url);
        const file = new File([blob], fileName, { type: blob.type });
        callback(file)
      }
    };
    xhr.send();
}
  
function getFileNameFromUrl(url:string) {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
} 
  
  
function uploadModelFile( file: File, mainColor="#df7920" ) {
    const filename = file.name;
    console.log("当前filename:", filename)
    const fileExtension = parseFileExtension( filename );
    if( !isValidFileExtension( fileExtension ) ) {
        throw new InvalidFileExtensionError();
    }
    
    const loader = getAssociatedLoader( filename );

    const statsStore = useStatsStore();
    statsStore.startUpload();
    statsStore.setFileSize( file.size );

    loader.load( file, (model: Object3D) => {
         model.traverse((child) => {
            // 如果对象的名称为“wall”，则将其隐藏
            console.log("child_name:", child.name)
            // Line 是墙壁=-=
            if ( child.name.startsWith("Line"))
            {
                console.log("隐藏", child.name)
                child.visible = false
            }
          })
        onModelLoaded( model, loader.getRotation(), mainColor );
        statsStore.setCurrentModel(model);
        statsStore.setRotation(loader.getRotation())
        statsStore.setCurrentFile(file);
        statsStore.endUpload();
    });
}

function modifyModelColor(mainColor: string)
{
    const currentFile = useStatsStore().getCurrentFile()
    uploadModelFile(currentFile, mainColor)
}

function delimitFileName( filename: string ) {
    const extIndex = filename.lastIndexOf('.');
    const properName = filename.slice(0, extIndex);
    const extension = filename.slice(extIndex + 1, filename.length);

    return [properName, extension];
}

function parseFileExtension( filename: string ) {
    return delimitFileName( filename )[ 1 ];
}

function isValidFileExtension( extension: string ) {
    return VALID_FILE_EXTENSIONS.includes( extension );
}

export {
    delimitFileName,
    isValidFileExtension,
    parseFileExtension,
    uploadModelFile,
    modifyModelColor,
    getFileFromUrl
};