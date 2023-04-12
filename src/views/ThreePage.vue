<template>
    <div ref="container"></div>
  </template>
  
  <script>
  import * as THREE from 'three'
  import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
  
  export default {
    mounted() {
      this.initScene()
    },
    methods: {
      initScene() {
        // 创建渲染器
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        this.$refs.container.appendChild(renderer.domElement)
  
        // 创建相机
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.set(0, 10, 20)
  
        // 创建场景
        const scene = new THREE.Scene()
  
        // 添加灯光
        const light = new THREE.AmbientLight(0xffffff, 1)
        scene.add(light)
  
        // 添加模型
        const loader = new FBXLoader()
        loader.load('src/views/test.fbx', (object) => {
          scene.add(object)
        })
  
        // 渲染场景
        const animate = () => {
          requestAnimationFrame(animate)
          renderer.render(scene, camera)
        }
        animate()
      }
    }
  }
  </script>
  