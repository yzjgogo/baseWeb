//yzj模块化
var moduleA = (function () {
  // 导出的对象
  var obj = {}

  // 小明
  var name = '小明'
  var age = 22

  function sum(num1, num2) {
    return num1 + num2
  }

  var flag = true

  if (flag) {
    console.log(sum(10, 20));
  }


  obj.flag = flag;
  obj.sum = sum;

  return obj
})()

// 小明
// var name = '小明'
// var age = 22
//
// function sum(num1, num2) {
//   return num1 + num2
// }
//
// var flag = true
//
// if (flag) {
//   console.log(sum(10, 20));
// }
//

// yzj CommonJS导出，得有底层支撑，类似导入CommonJS,后面的webpack就支持，因为用来node,底层支持CommonJS,
// module.exports = {
//   flag: flag,
//   sum: sum
// }


