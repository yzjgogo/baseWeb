<template>
  <div class="test-root">
    <button @click="$refs.imageInput.click()">拍照或选择图片后展示</button>
    <img :src="chooseImageUrl" style="width: 100px; height: 100px" />
    <!-- 
      只使用accept="image/*"，不使用capture：windows会选择硬盘里的图片，ios会弹出相机或相册供用户选择；android需要拦截处理；
      使用accept="image/*"，配合capture="environment"：windows会选择硬盘里的图片，ios访问相册吗？android需要拦截处理；
      使用accept="image/*"，配合capture="camera"：windows会选择硬盘里的图片（如果有摄像头会拍照？），ios打开相机吗？android需要拦截处理；
    -->
    <input
      type="file"
      style="display: none"
      accept="image/*"
      capture="environment"
      ref="imageInput"
      @change="imageInputChange"
    />
    <button @click="$refs.imageCompressInput.click()">图片压缩:可选压缩成base64或Blob</button>
    <img :src="base64imgOrBlobUrl" style="width: 100px; height: 100px" />
    <input
      type="file"
      style="display: none"
      accept="image/*"
      ref="imageCompressInput"
      @change="imageInputChangeThenCompress"
    />
    <button @click="$refs.videoInput.click()">录像展示</button>

    <video
      :src="chooseVideoUrl"
      autoplay
      style="width: 100px; height: 100px"
    ></video>
    <!-- 
      accept="video/*"
      capture="camcorder"

      capture="camcorder" 有没有用呢？去掉capture="camcorder"可不可以呢？
      windows中如果有摄像头会开启录像？如果没有回选择硬盘里的视频资源？
      ios会开启录像吗？
      android需要拦截处理
    -->
    <input
      type="file"
      style="display: none"
      accept="video/*"
      capture="camcorder"
      ref="videoInput"
      @change="videoInputChange"
    />
  </div>
</template>

<script>
//E:\web\baseWeb\vuecli3study\src\utils\ImageUtil.js

import { compressImageQuality } from '@/utils/ImageUtil'
export default {
  name: 'systemResource',
  data() {
    return { chooseImageUrl: '', base64imgOrBlobUrl:'',chooseVideoUrl: '' }
  },
  created() {},
  methods: {
    /**
     *这里的file和android中的File一样就是一个文件对象
     * @param e
     */
    imageInputChange(e) {
      const files = e.target.files
      if (files.length > 0) {
        const file = files[0]
        console.log('图片选择结果', files, file)
        //https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL_static
        //这里的URL.createObjectURL(file)是一个临时的url，使用完后需要调用URL.revokeObjectURL(url)来释放内存
        //URL.createObjectURL(file | Blob | MediaSource) 这个方法会创建一个指向文件的URL，使用完后需要调用URL.revokeObjectURL(url)来释放内存
        this.chooseImageUrl = URL.createObjectURL(file)
      }
    },
    imageInputChangeThenCompress(e) {
      const files = e.target.files
      if (files.length > 0) {
        const file = files[0]
        //压缩完成后以base64结果返回
        // compressImageQuality(file, { quality : 0.3, outputType : 'base64' }).then((base64str) => {
        //   this.base64imgOrBlobUrl = base64str
        // })
        
        //压缩完成后以blob结果返回
        compressImageQuality(file, { quality : 0.3, outputType : 'blob' }).then((blobData) => {
          this.base64imgOrBlobUrl = URL.createObjectURL(blobData)
        })
      }
    },
    videoInputChange(e) {
      const files = e.target.files
      if (files.length > 0) {
        const file = files[0]
        console.log('视频结果结果', files, file)
        //https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL_static
        //这里的URL.createObjectURL(file)是一个临时的url，使用完后需要调用URL.revokeObjectURL(url)来释放内存
        //URL.createObjectURL(file | Blob | MediaSource) 这个方法会创建一个指向文件的URL，使用完后需要调用URL.revokeObjectURL(url)来释放内存
        this.chooseVideoUrl = URL.createObjectURL(file)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.test-root {
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
}
</style>
