
import Vue from 'vue'
const autoZIndex = {
  inserted: function(el) {
    let maxZ = 0
    Array.from(document.body.children).forEach((element) => {
      const zIndex = window.getComputedStyle(element).zIndex
      if (!isNaN(zIndex) && zIndex < 100000) {
        maxZ = Math.max(maxZ, parseInt(zIndex, 10))
      }
    })
    el.style.zIndex = maxZ + 1
  }
}
Vue.directive('autoZIndex', autoZIndex)
