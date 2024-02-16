// 对全局属性 $loadings 声明文件和智能提示
type Lod = {
  show: () => void,
  hide: () => void
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $loadings: Lod
  }
}
