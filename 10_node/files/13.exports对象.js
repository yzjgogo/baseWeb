//一开始module.exports和exports指向同一个对象，如果你在使用的过程中改变了module.exports和exports的指向，不管你有没有改变指向，最终导出的都是module.exports指向的对象，而不是exports指向的对象，除非他俩指向同一个对象
console.log(exports)
console.log(module.exports)

console.log(exports === module.exports)

const username = 'zs'

module.exports.username = username
exports.age = 20
exports.sayHello = function() {
  console.log('大家好！')
}

// 最终，向外共享的结果，永远都是 module.exports 所指向的对象，注意永远
