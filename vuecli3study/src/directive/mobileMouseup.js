/**
 * 自定义指令：跨平台鼠标抬起事件
 * PC端绑定mouseup事件
 * 移动端绑定touchend和touchcancel事件
 * 自动处理并统一坐标信息
 * 支持 .stop 和 .prevent 修饰符
 */
export default {
  bind(el, binding) {
    // 获取修饰符
    const modifiers = binding.modifiers || {}

    // 统一处理事件处理函数
    const handler = (e) => {
      // 根据修饰符应用 stopPropagation
      if (modifiers.stop) {
        e.stopPropagation()
      }

      // 根据修饰符应用 preventDefault
      if (modifiers.prevent) {
        e.preventDefault()
      }

      // 创建一个统一的事件对象
      const eventObj = {
        originalEvent: e,
        target: e.target,
        currentTarget: e.currentTarget,
        type: e.type,
        preventDefault: () => e.preventDefault(),
        stopPropagation: () => e.stopPropagation()
      }

      // 根据事件类型处理坐标
      if (e.type === 'mouseup') {
        eventObj.clientX = e.clientX
        eventObj.clientY = e.clientY
      } else if ((e.type === 'touchend' || e.type === 'touchcancel') && e.changedTouches && e.changedTouches.length > 0) {
        // touchend 和 touchcancel 事件没有 touches，但有 changedTouches
        eventObj.clientX = e.changedTouches[0].clientX
        eventObj.clientY = e.changedTouches[0].clientY
        eventObj.button = 0
        eventObj.buttons = 1 // 触摸事件，相当于鼠标左键
      }

      // 调用绑定的函数，传入统一的事件对象
      binding.value(eventObj)
    }

    // 保存事件处理函数以便解绑
    el._mobileMouseupHandler = handler

    // 根据设备类型绑定适当的事件
    if (window.$isMobile()) {
      el.addEventListener('touchend', handler, false)
      el.addEventListener('touchcancel', handler, false)
    } else {
      el.addEventListener('mouseup', handler, false)
    }
  },

  unbind(el) {
    // 解绑事件
    if (el._mobileMouseupHandler) {
      el.removeEventListener('mouseup', el._mobileMouseupHandler)
      el.removeEventListener('touchend', el._mobileMouseupHandler)
      el.removeEventListener('touchcancel', el._mobileMouseupHandler)
      delete el._mobileMouseupHandler
    }
  }
}
