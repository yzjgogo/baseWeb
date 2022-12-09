<template>
    <div>
        <!--
        https://www.lodashjs.com/docs/lodash.uniq
        去重后返回新的数组，原数组保持不变
        只有第一次出现的元素才会被保留,后面出现的判断重复的元素不会保留，即使后面出现的对象有更多的属性也不保留
        -->
        <button @click.stop="doUniq">uniq:基本数据类型的数组去重</button>
        <br>
        <button @click.stop="doUniqBy">uniqBy:支持对象类型的数组去重，可指定参考对象的哪个属性作为唯一性去重</button>
        <button @click.stop="doUniqWith">uniqWith:支持对象类型的数组去重，类似java的equals()方法，两两比较</button>
    </div>
</template>

<script>
    export default {
        name: 'MyLodash',
        data() {
            return {};
        },
        methods: {
            doUniq() {
                let arrA = [1, 1, 2, 3]
                console.log(this._.uniq(arrA))
                console.log(arrA)
                console.log("以上是去重数字数组-可以去重")

                let arrB = ["1", "1", "2", "3"]
                console.log(this._.uniq(arrB))
                console.log(arrB)
                console.log("以上是去重字符串数组-可以去重")

                let a = {age: 10}
                let b = {age: 10}
                let c = {hh: 10}
                let arrC = [a, b, c]
                console.log(this._.uniq(arrC))
                console.log(arrC)
                console.log("以上是去重对象数组-无法有效去重")
            },
            doUniqBy() {
                let a = {age: 10}
                let b = {age: 11}
                let c = {hh: 10}
                let d = {age: 10}
                let temp = [a, b, c, d]
                //根据age属性来作为唯一性去重
                console.log(this._.uniqBy(temp, 'age'))//[a,b,c]
            },
            doUniqWith() {
                let a = {age: 10}
                let b = {age: 11}
                let c = {dd: 10}
                let d = {age: 10, ee: 5}
                let temp = [a, b, c, d]
                //uniqWith(数组,函数)，第二个参数传入函数名即可，会自动把参数代入every函数体
                console.log(this._.uniqWith(temp, this.every))//[a,b,c]
            },
            every(item1, item2) {
                console.log("遍历：", item1, item2)
                return item1.age === item2.age
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    /*<style scoped>*/

</style>
