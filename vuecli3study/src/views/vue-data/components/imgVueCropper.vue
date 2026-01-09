<template>
  <div class="cropper-page" @click.stop>
    <div class="choose-img" @click.stop="toScan">
      点击选择图片（支持pc,移动端浏览器，ios，微信环境）
    </div>

    <!-- 下面这个input的accept="image/*"，默认就支持pc,移动端浏览器，ios，微信环境直接选择图片，如果是android需要android对webview做一些修改，这里针对android的webview我定义了android/camera_image，android端可根据这个表示web既要拍照又要打开相册，app可以自己实现拍照和打开相册，然后再把图片返回给web，参考：git@192.168.3.55:shanbanyun/media-card.git（吉教融媒体卡）、git@192.168.3.55:shanbanyun/ai-book-android.git（早期的皖新app）中的CommonWebViewActivity，搜索camera_image -->
    <input
      type="file"
      style="display: none"
      accept="image/*,android/camera_image"
      ref="fileInput"
      @change="takePictureChange"
    />
    <div class="overlay" v-show="cropperShowDialog">
      <div class="cropDialog" v-show="cropperShowDialog">
        <div class="cropDialog-header"></div>
        <div class="cropDialog-content">
          <div class="cropper">
            <vueCropper
              ref="cropper"
              :img="selectedImgValue"
              :autoCrop="true"
              :canMove="false"
              :canMoveBox="true"
              :centerBox="false"
              :canScale="false"
              :full="false"
              :outputSize="1"
              :autoCropWidth="150"
              :autoCropHeight="200"
              outputType="jpeg"
              @cropMoving="cropMoving"
              @change-crop-size="changeCropSize"
            ></vueCropper>
            <!-- <img :src="selectedImgValue" ref="cropimg" class="cropimg" alt=""> -->
          </div>
          <div
            style="
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              padding: 14px 0;
            "
          >
            <van-button @click="cropperShowDialog = false" style="height: 36px"
              >取消</van-button
            >
            <van-button @click="clearCropper" style="height: 36px"
              >清除</van-button
            >
            <van-button @click="resetCropper" style="height: 36px"
              >重置</van-button
            >
            <van-button
              type="primary"
              @click="getCropperResult"
              style="height: 36px"
              >裁切</van-button
            >
          </div>
        </div>
        <div class="cropDialog-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
/*
https://www.npmjs.com/package/vue-cropper

  vue-cropper使用步骤1：package.json中引入vue-cropper , npm install vue-cropper --save
  vue-cropper使用步骤2：main.js中挂载vue-cropper
  import vueCropper from 'vue-cropper'
  Vue.use(vueCropper)
  vue-cropper使用步骤3：imgVueCropper.vue中使用vue-cropper
  */
export default {
  name: 'imgVueCropper',
  data() {
    return {
      selectedImgValue: '',
      cropperShowDialog: false
    }
  },
  mounted() {},
  methods: {
    toScan() {
      const that = this
      //android原生高版本还需要别的权限，因此索性相机权限也放到原生里申请，否则权限提示弹窗会弹出两次
      if (
        window.zhlWebView &&
        window.zhlWebView.checkCameraPermission &&
        !isAndroidWebView()
      ) {
        window.notGrantedCameraPermission = (res) => {
          that
            .$confirm('是否前往设置相机相册权限?', '操作提醒', {
              confirmButtonText: '确定',
              cancelButtonText: '取消'
            })
            .then(() => {
              if (window.zhlWebView) {
                window.zhlWebView.toGrantedCameraPermission()
              }
            })
        }
        window.grantedCameraPermission = (res) => {
          that.toUpdatePic()
        }
        window.zhlWebView.checkCameraPermission()
      } else {
        this.toUpdatePic()
      }
    },

    toUpdatePic() {
      let inputEl = this.$refs.fileInput
      inputEl.click()
    },

    /**
     * 处理选择图片文件的变更事件
     * 
     * 当用户通过文件输入框选择图片后触发此方法。
     * 1. 获取选中的文件列表。
     * 2. 如果存在选中的文件，创建一个 FileReader 对象。
     * 3. 将文件读取为 Data URL (base64 编码字符串)。
     * 4. 读取完成后，将结果赋值给 `selectedImgValue` 用于预览或裁剪，并打开裁剪弹窗 (`cropperShowDialog`)。
     * 5. 最后清空 input 的 value，确保连续选择同一张图片时也能触发 change 事件。
     *
     * @param {Event} e - 原生的 DOM 事件对象，包含选中的文件信息
     */
    takePictureChange(e) {
      const files = e.target.files
      if (files.length > 0) {
        const file_file = files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file_file)
        reader.onload = () => {
          this.selectedImgValue = String(reader.result)
          this.cropperShowDialog = true
        }
      }
      e.target.value = ''
    },
    cropMoving(data) {},
    changeCropSize() {},
    clearCropper() {
      this.$refs.cropper.clearCrop()
      // this.cropper.clear()
    },
    resetCropper() {
      this.$refs.cropper.clearCrop()
      this.$refs.cropper.reload()
      // this.cropper.reset()
    },
    /**
     * 获取裁剪结果并进行后续处理
     * 
     * 该方法流程如下：
     * 1. 调用裁剪组件获取裁剪后的 Blob 数据。
     * 2. 使用 FileReader 将 Blob 转为 ArrayBuffer。
     * 3. 将 ArrayBuffer 转为 Uint8Array，并手动修正首字节数据。
     * 4. 最终将二进制数据转为普通数组，传递给上传接口。
     */
    getCropperResult() {
      this.$refs.cropper.startCrop()
      
      // 获取裁剪后的图片数据 (Blob格式)
      this.$refs.cropper.getCropBlob((res) => {
      console.log('getCropBlob', res)
      // 创建 FileReader 对象用于读取 Blob 数据
      const reader = new FileReader()
      // 将 Blob 读取为 ArrayBuffer (二进制缓冲区)
      reader.readAsArrayBuffer(res)
      const that = this
      // 文件读取成功后的回调
      reader.onload = function () {
        console.log(this.result)
        
        // 创建 DataView 视图来操作底层的 ArrayBuffer
        const dataView = new DataView(this.result)
        // 将第一个字节 (offset 0) 修改为 255 (即二进制的 11111111 或十六进制的 0xFF)。
        // 这通常是用于修复某些特定格式(如jpeg)的文件头，或者是后端接口的特殊协议要求。
        dataView.setInt8(0, 255)
        
        // 基于修改后的 ArrayBuffer 创建 Uint8Array (无符号8位整数数组)
        const uint8Array = new Uint8Array(this.result)
        console.log('8', uint8Array)
        
        // 将 TypedArray (类型化数组) 转换为标准的 JS Array
        // 这样做是因为 getImageCardCode 接口可能需要接收普通数组作为参数
        const intArray = Array.from(uint8Array)
        
        // 调用接口：上传处理后的图片二进制数组进行 OCR 识别
        that.getImageCardCode(intArray)
      }
      })
    },
    getImageCardCode(array) {
      console.log('上传图片数组---', array)
      //本项目没这个接口，我只是写在这里
      this.$request.config
        .getImageCardCode({
          image: array,
          page_no: 1,
          page_size: 1
        })
        .then((res) => {
          this.cropperShowDialog = false
          if (res.data) {
            this.activateCode = res.data
          }
          this.$toast.clear()
        })
        .catch((err) => {
          this.cropperShowDialog = false
          // this.$toast.clear()
        })
    }
  },
  beforeDestroy() {}
}
</script>

<style lang="less" scoped>
.cropper-page {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .choose-img {
    background-color: pink;
    cursor: pointer;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cropDialog {
    width: 300px;
    z-index: 2002;
    width: 341px;
    // overflow: hidden;
    font-size: 17px;
    background-color: #fff;
    border-radius: 17px;
    &-header {
      padding-top: 28px;
      font-weight: 500;
      line-height: 25.6px;
      text-align: center;
    }
    &-content {
      .cropper {
        width: 100%;
        height: 400px;
        img {
          width: 100%;
        }
      }
      .van-button--primary {
        background-color: #4584ea;
      }
    }
    &-footer {
    }
  }
}
</style>

<style lang="less">
.cropper {
  .vue-cropper {
    .cropper-crop-box {
      .crop-point {
        width: 30px;
        height: 30px;
        &.point1 {
          left: -15px;
          top: -15px;
        }
        &.point3 {
          right: -15px;
          top: -15px;
        }
        &.point6 {
          left: -15px;
          bottom: -15px;
        }
        &.point8 {
          right: -15px;
          bottom: -15px;
        }
      }
    }
  }
}
</style>
