<template>
    <div>
        <!--
        axios基本用法参考：
        E:\web\baseWeb\8_learnaxios\src\main.js

        https://www.npmjs.com/package/axios
        https://github.com/axios/axios

        -->

<!--
想让a标签具备下载功能，需指定download属性，属性值可以指定下载的问题的默认文件名
但是实际上很多浏览器不指定download属性，仍然支持下载，最好还是指定；
对于下载图片(音视频zip等其他类型的文件是不是也这样？应该是)，a标签只支持同源文件的下载，因此跨域的话就无法下载，如果跨域我们可以先获取Blob然后使用Blob下载
参考：
https://blog.csdn.net/xgangzai/article/details/131507720
a标签下载注意事项.png
https://www.jianshu.com/p/461b2b888a21
a标签下载注意事项2.png
-->
        <a target="_blank" download="hello.mp3" href="https://zhljy.cdn.bcebos.com/CACBACAF/ff8a86b472dd40abb08bc5ebb20f87d6.mp3">a标签配合download属性支持下载指定链接的资源</a>
<!--        <a download="解决.zip" target="_blank" href="http://zhl-file.xxfz.com.cn/group1/M01/05/E6/dr5jH122sv-IENEPAAAAPGa0mh0AAJFMQNx4RAAAABU300.zip">第三课</a>-->
<!--        <a download="解决.png" target="_blank" href="https://zhldebug.cdn.bcebos.com/CACDAJBJ/79f67dd8468647469a9033ebbdee0169.jpg">a标签配合download属性下载图片-跨域失败的情况</a><br/><br/>-->

        <button @click="saveToLocal()">模拟校本云下载文件</button><br/><br/>
        <button @click="downloadImageUseAxios()">给定一个图片的url，用axios下载图片</button><br/><br/>
        <button @click="downloadImageUseCanvas()">给定一个图片的url，借用canvas和a标签下载图片</button><br/><br/>

<!--
加上 multiple 支持多选文件,弹出文件选择弹窗后，按住Ctrl键再去选择，就能多选
accept指定接收什么类型
onchange:当文件选择成功时回调

扩展：其它几种文件上传的方式：https://www.yii666.com/blog/380410.html

FormData用法参考：E:\web\JsBase\10_Improve\03_JS\form_data.html

参考ElementUI提供的文件上传组件：el-upload：E:\web\baseWeb\vuecli3study\src\views\elementui\MyElementUi.vue
-->
        <br>
        <input ref="mInput" type="file" accept="image/*" @change="selectFile()" />
    </div>
</template>

<script>


    import axios from 'axios'

    export default {
        data() {
            return {}
        },
        created() {
            let result = document.createElement('a')
            console.log("支持下载吗1:",result)
            let canSupportDownload = 'download' in result;
            console.log("支持下载吗2:",canSupportDownload)

            let obj = {
                age:123,
                mName:"jack"
            }
            console.log("有没有这个属性",('mName' in obj))
        },
        methods: {
            saveToLocal(){
                this.downloadFile().then(res => {
                    let fileName = res.headers['content-disposition']
                    const reg = /filename=(.*)/
                    fileName = decodeURI(reg.exec(fileName)[1].trim()) // 获取文件
                    let a = document.createElement('a')
                    //前面设置了responseType: 'blob',我试了试前面设置成responseType: 'arraybuffer'也可以，因为Ctrl+鼠标左键进入new Blob() -> BlobPart -> BufferSource -> ArrayBuffer
                    //Blob的用法E:\web\JsBase\09_Canvas\day02\16-2-toBlob将在canvas绘制的内容转为图片.html
                    //和 E:\web\JsBase\09_Canvas\day02\17-Canvas性能优化9_OffscreenCanvas_配合Worker.html 也有用到
                    let blob = new Blob([res.data])
                    let url = window.URL.createObjectURL(blob)
                    a.href = url
                    //使<a/>支持下载
                    a.download = fileName
                    //模拟手动点击触发下载
                    a.click()
                    window.URL.revokeObjectURL(url)
                }).catch(err => {

                })
            },
            downloadFile() {
                //http://125.69.0.87:8113/d211-bfy/api/sch/devicemaintain/exportdevicemaintainprocessexcel
                return new Promise((resolve, reject) => {
                    axios({
                        method: 'post',
                        url: `http://api.banfeiyue.com/api/sch/devicemaintain/exportdevicemaintainprocessexcel`,

                        // `responseType` indicates the type of data that the server will respond with
                        // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
                        //   browser only: 'blob'
                        //上面注释里axios的网站搜索responseType即可，一般默认是json，其它的看情况，自己试试
                        //其实这里的responseType只是在从服务器将数据请求回来后再在axios里进行blob处理，与服务器没有关系，因此你charles或F12里抓包看不到blob相关字样
                        responseType: 'blob',
                        //这个getResponse不知道啥意思，好像去掉也可以，官网也没搜索到
                        getResponse: true,
                        headers: {
                            //校本云 -> OA -> 维修报销统计 -> 统计导出
                            Authorization: 'aa9f0fbb68db2740963284a1ec9f824e9a6b62f892838a4da7eaca73c0da220f',
                            Scope: 'com.zhl.xby.web'
                        },
                        data: {
                            business_id: '200468',
                            is_pass: -2,
                            keyword: '',
                            start_time: '',
                            end_time: ''
                        }
                    }).then(res => {
                        console.log('执行then', res)
                        resolve(res)
                    }).catch(err => {
                        console.log('执行err', err)
                        reject(err)
                    })
                })
            },





            // 以上是下载文件------------------------------------------------------------------------------------------------------------------------------------






            downloadImageUseAxios(){
                axios({
                    url:'https://zhldebug.cdn.bcebos.com/CACDAJBJ/79f67dd8468647469a9033ebbdee0169.jpg'+ '?' + new Date().getTime(),//跟上时间戳防止走浏览器缓存
                    responseType:'blob',
                }).then(res => {
                    console.log("下载成功",res)
                    let a = document.createElement('a')
                    let blob = new Blob([res.data])
                    let url = window.URL.createObjectURL(blob)
                    a.href = url
                    a.download = new Date().getTime()+'.jpg'
                    a.click()
                    window.URL.revokeObjectURL(url)
                }).catch(error => {
                    console.log("下载失败",error)
                })},





            //给定一个图片的url，用axios下载图片-----------------------------------------------------------------------------------------------------





            downloadImageUseCanvas(){
                var image = new Image()
                //非同源(跨域的图片)需设置crossOrigin， 更多跨域的知识参考： E:\web\JsBase\10_Improve\01_跨域
                image.setAttribute('crossOrigin', 'Anonymous')
                image.onload = function() {
                    var canvas = document.createElement('canvas')
                    canvas.width = image.width
                    canvas.height = image.height
                    var context = canvas.getContext('2d')
                    context.drawImage(image, 0, 0, image.width, image.height)
                    var url = canvas.toDataURL('image/png') // 得到图片的base64编码数据
                    var a = document.createElement('a') // 生成一个a元素
                    var event = new MouseEvent('click') // 创建一个单击事件
                    a.download =  new Date().getTime()+'.png'
                    a.href = url
                    a.target = '_blank'
                    a.dispatchEvent(event) // 触发a的单击事件
                }
                image.src = 'https://zhldebug.cdn.bcebos.com/CACDAJBJ/79f67dd8468647469a9033ebbdee0169.jpg'+ '?' + new Date().getTime()
            },




            //给定一个图片的url，借用canvas和a标签下载图片-----------------------------------------------------------------------------------------------------





            selectFile(){
                //获取选择的图片文件file，这个File和android中的File概念完全一样，因为我再android钛成师悦app里也调用过这个接口上传图片，传的就是android的File对象
                const file = this.$refs.mInput.files[0]
                console.log("选择的图片",file,file.type)
                let formData = new FormData()
                formData.append('file', file)//file对象
                formData.append('file_type', file.type)
                formData.append('compress_tye', 0)
                formData.append('business_id', '200418')
                formData.append('token', 'aa9f0fbb68db2740963284a1ec9f824e9a6b62f892838a4da7eaca73c0da220f')
                formData.append('filter_sensitive', 0)
                formData.append('folder_id', 0)

                //试了试能不能给data传map这种键值对，结果发现时不行的
                // let map = new Map([
                //     ['file',file],
                //     ['file_type',file.type],
                //     ['compress_tye',0],
                //     ['business_id',200418],
                //     ['token','149d12f5216c428c420ba2cd7fcc04dbb048a252723ff88450da4e8519696123'],
                //     ['filter_sensitive',0],
                //     ['folder_id',0],
                // ])
                // console.log("看看map",map)

                axios({
                    url:`http://api.banfeiyue.com/api/archive/upload/uploadfile`,
                    method:'post',
                    data:formData,//post方法需要用data传参，且上传文件时data需要接收formData键值对数据，不能传map，不能传对象{key:value}
                    headers:{
                        Scope:'com.zhl.xby.web',
                        Authorization:'aa9f0fbb68db2740963284a1ec9f824e9a6b62f892838a4da7eaca73c0da220f'
                    }
                }).then(result => {
                    console.log("上传成功",result)
                },err => {
                    console.log("上传失败",err)
                })
            },
        }
    }
</script>

<style lang="less" scoped>

</style>


