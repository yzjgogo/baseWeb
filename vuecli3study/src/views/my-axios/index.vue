<template>
    <div>
        <!--
        基本用法参考：
        E:\web\baseWeb\8_learnaxios\src\main.js

        https://www.npmjs.com/package/axios
        https://github.com/axios/axios

        -->

        <button @click="saveToLocal()">下载文件</button>
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
            }
        }
    }
</script>

<style lang="less" scoped>

</style>


