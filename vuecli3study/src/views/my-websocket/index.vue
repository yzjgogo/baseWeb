<template>
    <div>
        <div class="close-socket" @click="send1()">
            发送1
        </div>
        <div class="close-socket" @click="send3()">
            发送3
        </div>
        <div class="close-socket" @click="closeSocket()">
            关闭socket
        </div>
    </div>
</template>

<script>

    import HeartCheck from '@/libs/websocketHeartCheck'
    export default {
        data() {
            return {
                socket: null,
            }
        },
        methods: {
            initSocket() {
                // const socket = new WebSocket(`ws://192.168.3.211/homework/record?token=6833a2d850c75da6cb609e64119a7f92491d23416ad44c82128f435ce4ebc70c&scope=com.zhl.xby.web&class_id=6015757`)
                // const socket = new WebSocket(`ws://192.168.3.211/homework/record?token=e2ea66236d7369ceacce2b2ac98337ac861fff988375f7f296fac2e350a3c88a&scope=com.zhl.xby.web&class_id=6015757`)
                const socket = new WebSocket(`ws://192.168.3.153:8000/ws`)
                // 定时发送心跳，防止 websocket 关闭
                const heartCheck = new HeartCheck(socket, 18000, '{"base_info":{"app_version":"1070","business_id":105,"business_type":1,"client_id":"saohaoshu","command":"req.auth.login","device_id":"03D3EEB53689036B750996981C1B927A","os":"Android","scope":"com.zhl.saohaoshu.aphone","send_time_mils":1686122981822,"subject_id":2},"token":"33a82ac5b014e40bcda0439c9a56b94df4d071671e5745653c1da9998b32af24"}')
                console.log("执行open之前")
                socket.addEventListener('open', function(event) {
                    console.log("执行open1")
                    let params = {
                        msg_type: 1,
                        content: {
                            homework_pdf_id: 2335,
                            class_id: 6015757
                        }
                    }
                    const homeworkMindSocketParam = {
                        msg_type: 3,
                        content: {
                            homework_pdf_id: 2335,
                            class_id: 6015757
                        }
                    }
                    heartCheck.reStart()
                    console.log("发送的数据",JSON.stringify(homeworkMindSocketParam))
                    // socket.send(JSON.stringify(params))
                    // socket.send(JSON.stringify(homeworkMindSocketParam))
                })
                socket.addEventListener('message', function(event) {
                    console.log("执行message",event)
                })

                socket.addEventListener('close', function() {
                    console.log("执行close")
                })

                this.socket = socket
            },
            closeSocket(){
                this.socket && this.socket.close()
            },
            send1(){
                let params = {
                    msg_type: 1,
                    content: {
                        homework_pdf_id: 2335,
                        class_id: 6015757
                    }
                }
                this.socket.send(JSON.stringify(params))
            },
            send3(){
                const homeworkMindSocketParam = {
                    msg_type: 3,
                    content: {
                        homework_pdf_id: 2335,
                        class_id: 6015757
                    }
                }
                this.socket.send(JSON.stringify(homeworkMindSocketParam))
            }
        },
        mounted() {
            this.initSocket()
        }
    }
</script>

<style lang="less" scoped>
.close-socket{
    width: 120px;
    height: 50px;
    background-color: #f8b38d;
}
</style>


