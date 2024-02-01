type Options = {
  element: string
}

export default function (options: Options): Promise<{baseUrl: string | null}> {
  return new Promise((resolve) => {

    const toBase64 = (el: HTMLImageElement) => {
      const canvas: HTMLCanvasElement = document.createElement('canvas')
      const context: CanvasRenderingContext2D = canvas.getContext('2d')
      canvas.width = el.width
      canvas.height = el.height
      console.log(canvas.width, canvas.height)
      context.drawImage(el, 0, 0, canvas.width, canvas.height)
      return canvas.toDataURL('image/jpg')
    }

    const domData: HTMLImageElement = document.querySelector(options.element) // 只会获取到第一个符合的元素
    resolve(toBase64(domData))
  })
}
