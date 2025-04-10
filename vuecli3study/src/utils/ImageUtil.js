/**
 * 压缩图片质量并返回处理后的结果。
 * @param {File} file - 要压缩的图片文件对象。
 * @param {Object} options - 配置选项。
 * @param {number} [options.quality=0.3] - 压缩质量，范围是 0 到 1。
 * @param {string} [options.outputType='base64'] - 输出类型，`base64` 或 `blob`。
 * @returns {Promise<string|Blob>} 返回压缩后的图片数据，依据 outputType 选择 `base64` 或 `blob`。
 */
const compressImageQuality = (file, options = {}) => {
  const { quality = 0.3, outputType = 'base64' } = options

  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = function(event) {
      const img = new Image()
      img.onload = function() {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        // 设置 Canvas 尺寸为图片的原始尺寸
        canvas.width = img.width
        canvas.height = img.height

        // 在 Canvas 上绘制图片
        ctx.drawImage(img, 0, 0)

        // 转换 Canvas 为所需格式
        if (outputType === 'base64') {
          resolve(canvas.toDataURL('image/jpeg', quality))
        } else if (outputType === 'blob') {
          canvas.toBlob(blob => resolve(blob), 'image/jpeg', quality)
        } else {
          reject(new Error('Invalid outputType. Use "base64" or "blob".'))
        }
      }

      img.src = event.target.result
    }

    reader.onerror = function(error) {
      reject(error)
    }

    reader.readAsDataURL(file)
  })
}
export {
  compressImageQuality
}
