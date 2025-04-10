<template>
  <div class="cropper-page" @click.stop>
    <div class="cropper-box">
      <img :src="imgUrl" alt="" id="imgPreview" />
    </div>
    <div class="footer">
      <div class="lf">重拍</div>
      <div class="complete-btn" @click="changeFile"></div>
      <div class="lf" @click="rotate(90)">旋转</div>
    </div>
  </div>
</template>

<script>
/*
  第三方图片剪裁工具：Cropper.js
  npm install cropperjs --save

  https://fengyuanchen.github.io/cropperjs/v2/
  https://fengyuanchen.github.io/cropperjs/v2/guide.html
  https://fengyuanchen.github.io/cropperjs/v2/playground.html
https://github.com/fengyuanchen/cropperjs

更多高级用法看官网


*/
import Cropper from 'cropperjs'
import { compressImageQuality } from '@/utils/ImageUtil'
import 'cropperjs/dist/cropper.css'
export default {
  name: 'imgCropper',
  data() {
    return {
      cropper: null,
      imgUrl: '',
      fileUrl:
        'https://images.pexels.com/photos/30974634/pexels-photo-30974634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  },
  watch: {
    fileUrl: {
      handler(val) {
        console.log('图片监听到了imgUrl:', val)
        if (val) {
          this.imgUrl = val
          this.initCropper()
        }
      },
      immediate: true
    }
  },
  mounted() {},
  methods: {
    initCropper() {
      if (this.cropper) {
        //更换图片
        this.cropper.replace(this.imgUrl)
        return
      }
      this.$nextTick(() => {
        //创建图片剪裁器需要关联上img标签
        this.cropper = new Cropper(document.getElementById('imgPreview'))
        console.log('this.cropper:', this.cropper)
      })
    },
    rephotograph() {
      // this.$emit('rephotograph')
      // this.close()
    },
    close() {
      // this.$emit('close')
    },
    /*
      模拟重拍，此案例没有用到这个方法
    */
    rephotographChange(e) {
      const files = e.target.files
      if (files.length > 0) {
        const file = files[0]
        const fileURL = URL.createObjectURL(file)
        this.imgUrl = fileURL
        this.cropper.replace(fileURL)
      }
    },
    changeFile() {
      const croppCanvas = this.cropper.getCroppedCanvas()
      croppCanvas.toBlob(async (blob) => {
        compressImageQuality(blob, {
          quality: 0.3,
          outputType: 'blob'
        }).then((new_blod) => {
          this.uploadFile(new_blod)
        })
      })
    },
    uploadFile(blob) {
      console.log('上传的文件', blob)
      // this.$request.upload
      //   .uploadfile({
      //     formData: {
      //       file_type: 'png',
      //       file: blob
      //     },
      //     loading_text: '图片上传中'
      //   })
      //   .then((file) => {
      //     this.$emit('changeFile', file)
      //   })
    },
    rotate(value) {
      this.cropper.rotate(value)
    }
  },
  beforeDestroy() {
    if (this.cropper) {
      this.cropper.destroy()
    }
  }
}
</script>

<style lang="less" scoped>
.cropper-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000;
  .cropper-box {
    flex: 1;
    overflow: hidden;
    margin: 32px 34px;
    /deep/.cropper-crop-box {
      .cropper-point.point-se {
        height: 5px;
        width: 5px;
      }
    }
  }
  .footer {
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 41px;
    font-size: 17px;
    color: #fff;
    .complete-btn {
      width: 69px;
      height: 69px;
      background: url('../images/complete.png') no-repeat center;
      background-size: 100% 100%;
      margin: 0 64px;
    }
    .input-file {
      display: none;
    }
  }
}
</style>
