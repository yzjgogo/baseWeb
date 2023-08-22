<template>
    <div id="demo">
        <button v-on:click="show = !show">
            Toggle
        </button>
        <transition name="fade">
            <p v-show="show">hello</p>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true
            }
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
    /*入场，从无到有*/

    /*过渡的过程*/
    .fade-enter-active {
        transition: all .5s;
    }
    /*入场过渡的开始状态*/
    .fade-enter {
        /*opacity: 0;*/
        transform: translateX(10px);
        /*background-color: red;*/
    }
    /*入场过渡的结束状态*/
    .fade-enter-to {
        /*background-color: blue;*/
    }




    /*离开，从有到无*/
    .fade-leave-active {
        transition: all .5s;
    }
    /*出场过渡的开始状态*/
    .fade-leave {
        /*opacity: 0.5;*/
        /*background-color: blue;*/
    }
    /*出场过渡的结束状态*/
    .fade-leave-to {
        /*opacity: 0;*/
        transform: translateX(10px);
        /*background-color: red;*/
    }
</style>


