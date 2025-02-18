
// /* eslint no-unused-vars:0*/
var t = 'Hello world';
console.log(t);//为了让var t被使用，测试事把这行注释掉

var foo ={
    bar: 'baz',
    qux: 'quux'
};
var myName = 'zhangsan';//没有驼峰命名
console.log(process.env.NODE_ENV);//process.env.NODE_ENV是nodejs的全局变量，不需要引入