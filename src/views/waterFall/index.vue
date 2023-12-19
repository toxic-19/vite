<script setup lang="ts">
import {defineProps, onMounted, reactive} from "vue";

const list = reactive<any[]>([
  {
    height: 300,
    background: 'red'
  },
  {
    height: 400,
    background: 'pink'
  },
  {
    height: 500,
    background: 'blue'
  },
  {
    height: 200,
    background: 'green'
  },
  {
    height: 300,
    background: 'gray'
  },
  {
    height: 400,
    background: '#CC00FF'
  },
  {
    height: 200,
    background: 'black'
  },
  {
    height: 100,
    background: '#996666'
  },
  {
    height: 500,
    background: 'skyblue'
  },
  {
    height: 300,
    background: '#993366'
  },
  {
    height: 100,
    background: '#33FF33'
  },
  {
    height: 400,
    background: 'skyblue'
  },
  {
    height: 200,
    background: '#6633CC'
  },
  {
    height: 300,
    background: '#666699'
  },
  {
    height: 300,
    background: '#66CCFF'
  },
  {
    height: 300,
    background: 'skyblue'
  },
  {
    height: 200,
    background: '#CC3366'
  },
  {
    height: 200,
    background: '#CC9966'
  },
  {
    height: 200,
    background: '#FF00FF'
  },
  {
    height: 500,
    background: '#990000'
  },
  {
    height: 400,
    background: 'red'
  },
  {
    height: 100,
    background: '#999966'
  },
  {
    height: 200,
    background: '#CCCC66'
  },
  {
    height: 300,
    background: '#FF33FF'
  },
  {
    height: 400,
    background: '#FFFF66'
  },
  {
    height: 200,
    background: 'red'
  },
  {
    height: 100,
    background: 'skyblue'
  },
  {
    height: 200,
    background: '#33CC00'
  },
  {
    height: 300,
    background: '#330033'
  },
  {
    height: 100,
    background: '#0066CC'
  },
  {
    height: 200,
    background: 'skyblue'
  },
  {
    height: 100,
    background: '#006666'
  },
  {
    height: 200,
    background: 'yellow'
  },
  {
    height: 300,
    background: 'yellow'
  },
  {
    height: 100,
    background: '#33CCFF'
  },
  {
    height: 400,
    background: 'yellow'
  },
  {
    height: 400,
    background: 'yellow'
  },
  {
    height: 200,
    background: '#33FF00'
  },
  {
    height: 300,
    background: 'yellow'
  },
  {
    height: 100,
    background: 'green'
  }

]) // 只给每一项定义了height和background

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
  for (let i = 0; i < list.length; i++) {
    if (i < column) {
      list[i].top = top
      list[i].left = i * width
      waterList.push(list[i])
      heightList.push(list[i].height + top) // 记录每一项的高度
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

      list[i].top = minHeight + top
      list[i].left = minIndex * width
      waterList.push(list[i])
      heightList[minIndex] += list[i].height + 20
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
