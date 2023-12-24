export const axios = {
  get <T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            setTimeout(() =>{
              resolve(JSON.parse(xhr.responseText))
            }, 2000)
          }
        }
        xhr.send('null')
    })
  }
}
// readyState
// 0 - 未初始化 还没有调用send方法
// 1 - 载入 已调用send方法，正在发送请求
// 2 - 载入完成 send执行完成 已经接收到全部响应信息
// 3 - 交互 解析响应内容
// 4 - 完成 响应内容解析完成 可以在客户端调用
