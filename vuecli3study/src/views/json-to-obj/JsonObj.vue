<template>
    <div>
        直接看data.exportFieldData
    </div>
</template>

<script>
    // import exportFieldDatas from './my-field.json'
    import exportFieldDatas from './booklist.json'
    function deepFreeze(obj) {
        console.log("哈哈哈------我看看")
        var propNames = Object.getOwnPropertyNames(obj);
        propNames.forEach(function (name) {
            var prop = obj[name];
            if (typeof prop == 'object' && prop !== null)
                deepFreeze(prop);
        });
        return Object.freeze(obj);
    }
    export default {
        name: 'JsonObj',
        data() {
            return {
                exportFieldData: deepFreeze(exportFieldDatas)
            };
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    /*<style scoped>*/
</style>
