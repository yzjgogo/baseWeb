
// 全局注册filter_1：定义一个filter.js文件，文件里按需定义很多方法
const doFilterForOneParam = param => {
  return '全局一个参数的filter-'+param
}
const doFilterForTwoParams = (param1, param2) => {
  //一些逻辑
  return '全局两个参数的filter-'+param1 + '-' + param2
}


export default {
  doFilterForOneParam,
  doFilterForTwoParams
}
