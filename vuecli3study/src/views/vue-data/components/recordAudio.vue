<template>
  <div class="record" @click.stop>
    <audio ref="audio" :src="resultAudioBlobUrl" autoplay controls="controls"></audio>
    <div class="record-container">
      <div class="wave-con">
        <canvas id="wave"></canvas>
      </div>
      <div class="time">{{ formattedTime }}</div>
    </div>
    <div class="record-footer">
      <div class="lf" @click="cancel">取消</div>
      <div
        class="play-btn"
        :class="{ 'icon-record': isRecording }"
        @click="startRecord"
      ></div>
      <div class="lf" @click="uplodaRecord">完成</div>
    </div>
  </div>
</template>

<script>
/*

1：安装js-audio-recorder
npm install js-audio-recorder --save
2：安装lamejs
npm install lamejs --save

注意：
使用js-audio-recorder进行录音时，如果你的网页是http而非https访问的，则浏览器可能会报错：浏览器不支持getUserMedia
这是因为浏览器的策略认为http不安全，不暴露给你UserMedia相关的api



开发时想测试可以用‘mkcert’让vue项目以https方式启动服务：https://github.com/FiloSottile/mkcert#installation

下面这几个命令我都是在我当前vue项目的terminal中执行的
1：npm install -g mkcert 
  注意是全局安装
2：mkcert create-ca
3：mkcert create-cert  
4：完成以上步骤后，会在你vue项目的根目录中产生ca.crt、ca.key、cert.crt、cert.key四个文件
5：找到ca.crt，双击打开ca.crt文件进行证书的安装
6：安装证书
7：确定
8：当前用户
9：下一步
10：将所有证书都放入下列存储
11：浏览-授信任的根证书颁发机构-确认
12：将刚刚生成的cert.crt和cert.key两个拷贝到项目的src/ssl文件夹中
13：然后在vue.config.js中配置如下：
  devServer: {
    https: {
      key: fs.readFileSync('./cert.key'),
      cert: fs.readFileSync('./cert.crt')
    }
  }
14：在此'npm run serve'启动项目就是https的了,
  访问地址是https://localhost:8080/，注意是https而非http了
15：如果你在chrome中访问https://localhost:8080/，会提示不安全，点击‘高级’->‘继续前往localhost(不安全)’即可  
16:在android的webview环境可能会打不开，也是因为不安全，直接在pc浏览器或手机浏览器调试吧    
*/
import AudioRecorder from 'js-audio-recorder'
// lamejs 有bug 必须向下面这样引用一下全局变量才可以
import MPEGMode from 'lamejs/src/js/MPEGMode'
import Lame from 'lamejs/src/js/Lame'
import BitStream from 'lamejs/src/js/BitStream'
// import AppRermission from './AppPermission'
window.MPEGMode = MPEGMode
window.Lame = Lame
window.BitStream = BitStream

const lamejs = require('lamejs')
let context, wave
export default {
  name: 'recordAudio',
  data() {
    return {
      formattedTime: '00:00',
      recorder: null,
      resultAudioBlobUrl:''
    }
  },
  mounted() {
    setTimeout(() => {
      this.createWaveSurfer()
    }, 300)
  },
  methods: {
    // 注意要申请录音权限，这里省略，对于pc和移动浏览器会提示你申请，对于android需要自己申请权限
    startRecord() {
      if (this.recorder) {
        if (this.recorder.isrecording) {
          this.recorder.stop()
        } else {
          this.recorder.start()
        }
        return
      }
    },

    /**
     * 通过canvss绘制音频波形
     */
    createWaveSurfer() {
      console.log('创建录音')
      this.recorder = new AudioRecorder({
        sampleBit: 16,
        sampleRate: 16000,
        numChannel: 1
      })
      wave = document.getElementById('wave')
      // 获取wave父节点的宽高
      const { width, height } = wave.parentNode.getBoundingClientRect()
      console.dir(wave)
      wave.width = width
      wave.height = height
      context = wave.getContext('2d')

      // 监听录音进度
      this.recorder.onprogress = params => {
        console.log(params.duration)
        this.updateProgress(params.duration)
        const vol = params.vol < 20 ? params.vol + 50 : params.vol
        this.draw(vol)
      }
      // 初始化波形
      this.draw(0)
    },

    /*
    更新录音的时长
    */
    updateProgress(time) {
      const formattedTime = [
        Math.floor(time / 60), // minutes
        Math.floor(time % 60) // seconds
      ]
        .map(v => (v < 10 ? '0' + v : v))
        .join(':')
      this.formattedTime = formattedTime
    },
    /*
    绘制录音波形
    */
    draw(vol) {
      const waveWidth = wave.width
      const waveHeight = wave.height
      const centerX = waveWidth / 2
      const centerY = wave.height / 2
      context.clearRect(0, 0, waveWidth, waveHeight)
      context.fillStyle = '#008CFF'
      context.strokeStyle = '#008CFF'
      if (vol === 0) {
        context.beginPath()
        context.moveTo(0, centerY)
        context.lineTo(waveWidth, centerY)
        context.lineWidth = 2
        context.stroke()
        return
      }
      const barWidth = 3
      const gapWidth = 5
      const difficulty_value = gapWidth * 3
      const totalWidth = barWidth + gapWidth
      const numBars = Math.ceil(centerX / totalWidth)
      let right = centerX
      let left = centerX
      const t = centerY / numBars
      context.fill()

      for (let i = 0; i < numBars; i++) {
        if (i !== 0) {
          right += barWidth + 5
          left -= barWidth + 5
        }
        let line_hight = ((numBars - i) * t * vol) / 100
        if (i && i % 2) {
          line_hight = line_hight - Math.random() * difficulty_value

          this.roundRect(right, centerY, barWidth, line_hight)
          this.roundRect(right, centerY, barWidth, -line_hight)
          this.roundRect(left, centerY, barWidth, line_hight)
          this.roundRect(left, centerY, barWidth, -line_hight)
        } else {
          this.roundRect(right, centerY, barWidth, line_hight)
          this.roundRect(right, centerY, barWidth, -line_hight)
          this.roundRect(left, centerY, barWidth, line_hight)
          this.roundRect(left, centerY, barWidth, -line_hight)
        }
      }
    },
    roundRect(x, y, width, height) {
      context.fillRect(x, y, width, height)
    },
    /**
     * 把wav格式的音频转换成mp3格式
     * @param wavBlob wav格式的音频Blob文件
     * @return {Promise<Blob>} mp3格式的音频Blob文件
     * @description 这里使用了lamejs库来进行wav转mp3的转换，具体的实现可以参考lamejs的文档
     */
    async convertToMp3(wavBlob) {
      // 获取wav头信息
      const arrayBuffer = await wavBlob.arrayBuffer();
      const wav = lamejs.WavHeader.readHeader(new DataView(arrayBuffer))

      const { channels, sampleRate } = wav
      const mp3enc = new lamejs.Mp3Encoder(channels, sampleRate, 128)
      // 获取左右通道数据
      const result = this.recorder.getChannelData()
      const buffer = []

      const leftData =
        result.left &&
        new Int16Array(result.left.buffer, 0, result.left.byteLength / 2)
      const rightData =
        result.right &&
        new Int16Array(result.right.buffer, 0, result.right.byteLength / 2)
      const remaining = leftData.length + (rightData ? rightData.length : 0)

      const maxSamples = 1152
      for (let i = 0; i < remaining; i += maxSamples) {
        const left = leftData.subarray(i, i + maxSamples)
        let right = null
        let mp3buf = null

        if (channels === 2) {
          right = rightData.subarray(i, i + maxSamples)
          mp3buf = mp3enc.encodeBuffer(left, right)
        } else {
          mp3buf = mp3enc.encodeBuffer(left)
        }

        if (mp3buf.length > 0) {
          buffer.push(mp3buf)
        }
      }

      const enc = mp3enc.flush()

      if (enc.length > 0) {
        buffer.push(enc)
      }

      return new Blob(buffer, { type: 'audio/mp3' })
    },
    uplodaRecord() {
      this.recorder.stop()
      const wavBlob = this.recorder.getWAVBlob()
      const file = new File([wavBlob], 'record.wav', { type: wavBlob.type })
      console.log('录音的结果', file)
    
      // js-audio-recorder默认录音结果是wav格式的音频，如果不需要把wav转为mp3，可以直接使用wavBlob
      // this.resultAudioBlobUrl = URL.createObjectURL(file)
      // this.uploadFile(file)

      // 如果需要把wav转为mp3则走下面的逻辑
      this.convertToMp3(wavBlob).then((mp3Blob)=> {
      console.log('录音的结果2', mp3Blob)
      this.resultAudioBlobUrl = URL.createObjectURL(mp3Blob)
      console.log('录音的结果3', this.resultAudioBlobUrl)
      })
    },
    uploadFile(file) {
      // this.$request.upload.uploadfile({
      //   formData: {
      //     file_type: 'wav',
      //     file: file
      //   },
      //   loading_text: '录音上传中……'
      // }).then(file => {
      //   this.$emit('changeFile', file)
      // })
    },
    cancel() {
      console.log('取消录音')
      // this.$emit('cancelMedia')
    }
  },
  computed: {
    isRecording() {
      return this.recorder && this.recorder.isrecording
    }
  },
  beforeDestroy() {
    this.recorder.stop()
    this.recorder = null
    context = null
  }
}
</script>

<style lang="less" scoped>
.record {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #000;
  .record-container {
    flex: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .wave-con {
      width: 100%;
      height: 128px;
      .wave {
        width: 100%;
        height: 100%;
      }
    }
    .time {
      font-size: 19px;
      color: #ffffff;
      margin-top: 34px;
    }
  }
  .record-footer {
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 83px;
    font-size: 17px;
    color: #ffffff;
    .play-btn {
      width: 69px;
      height: 69px;
      background: url('../images/icon-record.png') no-repeat center;
      background-size: 100% 100%;
      margin: 0 64px;
    }
    .icon-record {
      background: url('../images/stop-record.png') no-repeat center;
      background-size: 100% 100%;
    }
  }
}
</style>
