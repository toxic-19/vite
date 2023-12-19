<script setup lang="ts">
import {defineProps, onMounted, reactive} from "vue";

const props = defineProps<{list: any[]}>()
const waterList = reactive<any[]>([])
// 瀑布流需要保持高度趋于相同，所以我们需要对高度数组进行维护
const heightList: number[] = [] // 不需要进行响应式转换
// 因为是绝对定义，需要对每一项都设置left和top
const init = () => {
  const width = 130
  const top = 20
  // 一行几列
  const column = Math.floor(document.body.clientWidth / width) // 向下取整
  // 1. 先对list中的前column个即第一行设置left和top
  for (let i = 0; i < props.list.length; i++) {
    if (i < column) {
      props.list[i].top = top
      props.list[i].left = i * width
      waterList.push(props.list[i])
      heightList.push(props.list[i].height + top) // 记录每一项的高度
    } else {
      // 找到目前最小的高度和索引

      // 1. for循环法找到最低列高
      // let minHeight = heightList[0]
      // let minIndex = 0
      // heightList.forEach((height, index) => {
      //   if (minHeight > height) {
      //     minHeight = height
      //     minIndex = index
      //   }
      // })

      // 2. 使用Math和findIndex找到最低列高和索引
      let minHeight = Math.min(...heightList)
      let minIndex = heightList.findIndex(item => item === minHeight)

      props.list[i].top = minHeight + top
      props.list[i].left = minIndex * width
      waterList.push(props.list[i])
      heightList[minIndex] += props.list[i].height + 20
    }
  }
}
onMounted(() => {
  init()
  window.onresize = () => init()
})
</script>

<template>
  <div class="toxic-waterfall">
    <div class="toxic-waterfall__items"
         :style="{ height:waterfallItem.height + 'px', background:waterfallItem.background,
                   left: waterfallItem.left + 'px', top:waterfallItem.top + 'px'}"
         v-for="(waterfallItem, index) in waterList"
         :key="index">
    </div>
  </div>
</template>

<style scoped lang="scss">
@include block(waterfall) {
  margin-left: 20px;
  height: 100%;
  overflow: auto;
  position: relative;
  @include ele(items) {
    position: absolute;
    width: 120px;
  }
}
</style>
