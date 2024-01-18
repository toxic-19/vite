import { onMounted } from "vue";

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
      context.drawImage(el, 0, 0, canvas.width, canvas.height)
      return canvas.toDataURL('image/jpg')
    }
    // onMounted(() => {
    const domData: HTMLImageElement = document.querySelector(options.element)
    // domData.onload = (): void => {
    //   resolve({
    //     baseUrl: toBase64(domData)
    //   })
    // }
    resolve(toBase64(domData))
    // })
  })
}
