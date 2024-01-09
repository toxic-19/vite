// 按需引入AntD
import { Button, message, TimePicker } from "ant-design-vue"
const components = [Button, TimePicker]
const globalProperties = [message]

export default function setupAntd(app: any) {
  components.forEach(component => {
    app.use(component)
  })
  globalProperties.forEach(property => {
    app.config.globalProperties[`${property}`] = property
  })
}
