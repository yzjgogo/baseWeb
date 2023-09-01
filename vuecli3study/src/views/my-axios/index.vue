<template>
    <div>
        <!--
        基本用法参考：
        E:\web\baseWeb\8_learnaxios\src\main.js

        https://www.npmjs.com/package/axios
        https://github.com/axios/axios

        -->

        <button @click="saveToLocal()">下载文件-Blob</button>

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
        methods: {
            downloadFile() {
                //http://125.69.0.87:8113/d211-bfy/api/sch/devicemaintain/exportdevicemaintainprocessexcel
                return new Promise((resolve, reject) => {
                    axios({
                        method: 'post',
                        url: `http://125.69.0.87:8113/d211-bfy/api/sch/devicemaintain/exportdevicemaintainprocessexcel`,

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
                            Authorization: 'b54220adec939ae3c4fe2881eb5327428297cb3a7cc636a4d7f16cc8d0b48560',
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
            selectFile(){
                //获取选择的图片文件file，这个File和android中的File概念完全一样，因为我再android钛成师悦app里也调用过这个接口上传图片，传的就是android的File对象
                const file = this.$refs.mInput.files[0]
                console.log("选择的图片",file)
                let formData = new FormData()
                formData.append('file', file)//file对象
                formData.append('file_type', file.type)
                formData.append('compress_tye', 0)
                formData.append('business_id', '200418')
                formData.append('token', '149d12f5216c428c420ba2cd7fcc04dbb048a252723ff88450da4e8519696123')
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
                    data:formData,//post方法需要用data传参，data可以接收formData键值对数据，不能传map
                    headers:{
                        Scope:'com.zhl.xby.web',
                        Authorization:'149d12f5216c428c420ba2cd7fcc04dbb048a252723ff88450da4e8519696123'
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


