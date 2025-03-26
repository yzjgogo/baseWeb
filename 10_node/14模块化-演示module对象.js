
/*
输出如下：
最总要的是exports
Module {
  '8': [Function: internalRequire],
  id: '.',
  path: 'E:\\web\\baseWeb\\10_node',
  exports: {},   这个很重要，所有的导出都放到这个对象里，然后通过module.exports导出，然后别的模块通过require引入
  parent: null,
  filename: 'E:\\web\\baseWeb\\10_node\\14模块化-演示module对象.js',
  loaded: false,
  children: [],
  paths: [
    'E:\\web\\baseWeb\\10_node\\node_modules',
    'E:\\web\\baseWeb\\node_modules',
    'E:\\web\\node_modules',
    'E:\\node_modules'
  ]
}    

*/

console.log(module)
