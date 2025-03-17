
import Vue from 'vue'
const yellowBg = {
  inserted: function(el) {
    el.style.backgroundColor = 'yellow'
  }
}
Vue.directive('yellowBg', yellowBg)
