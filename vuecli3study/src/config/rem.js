// rem在项目中的使用步骤1
function setRem() {
  // 设置页面根节点字体大小
  let clientWidth = document.documentElement.clientWidth
  const clientHeight = document.documentElement.clientHeight
  //这个if判断来自善版无影项目，为了防止当某个设备的屏幕宽度很宽时则以高度为基准，方便将布局至于屏幕的中间
  if (clientWidth / 1.778 > clientHeight) {
    // 如果宽高比大于 1.778,则以高度的1.778倍为基准
    clientWidth = clientHeight * 1.778
  }
  //这个是善版无影PC端的设置，标准尺寸是1920*1080,1rem=100px,19.2rem撑满屏幕宽度(19.2*100=1920)
  // document.documentElement.style.fontSize = clientWidth / 19.2 + 'px'
  //这个是手机端参考尺寸是苹果宽度375px，1rem=37.5px,10rem撑满屏幕宽度(10*37.5=375)
  document.documentElement.style.fontSize = clientWidth / 10 + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.addEventListener('resize', () => {
  setRem()
})
