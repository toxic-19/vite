<script setup lang="ts">
import type {Directive} from "vue"
import {reactive, ref} from "vue" // 用于类型检查 只导入了 Directive 的类型。而不是 Directive 类
import {axios} from "@/server/axios"

const vFocus: Directive = { // 在setup中 任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令
  mounted: (el: HTMLElement) => el.focus() // mounted: 元素插入到父元素时调用
}
const dragList = ref([])

const parentNode = ref(null)
const getList = async () => {
  const {data} = await axios.get('/drag-list.json')
  dragList.value = data
}
getList()
const vDrag: Directive = (el: HTMLElement) => {
  let dragEl: HTMLElement | null = null // 拖拽元素
  let targetEl: HTMLElement | null = null // 目标元素
  const _index = element => {
    const domData = Array.from(parentNode.value.childNodes)
    return domData.findIndex((dom: HTMLElement) => dom.innerText == element.innerText)
  }
  // 设置过渡的动画效果 - 对dom元素进行处理
  const _anim = (startPos, dom) => {
    // 首先立即移动一个DOM元素，然后在其后的0.3秒内平滑地移动回其原始位置，创建一个插入或叠加的效果。在动画完成后，它会清除过渡效果并重置样式。
    const offset = startPos - dom.getBoundingClientRect().top
    dom.style.transition = 'none' // 禁用现有的过渡效果
    dom.style.transform = `translateY(${offset}px)` // 垂直移动

    dom.offsetWidth // 强制浏览器触发重绘；为了确保DOM已经移动到预期的位置。
    dom.style.transition = 'transform .3s'
    dom.style.transform = ``
    clearTimeout(dom.animated)

    // 动画完成后清除过渡效果并重置样式
    dom.animated = setTimeout(() => {
      dom.style.transition = ''
      dom.style.transform = ``
      dom.animated = false
    }, 300)
  }
  // 开始拖拽
  const dragStart = e => {
    dragEl = e.target
  }
  // 拖拽过程
  const dragOver = e => {
    // 1. 确保拖拽元素和目标元素的存在
    if (!e.target) return // 检查目标元素是否存在
    if (!dragEl) return // 检查拖拽元素是否存在
    targetEl = e.target
    const targetTop = e.target?.getBoundingClientRect()?.top
    const dragTop = dragEl?.getBoundingClientRect()?.top
    if (targetEl?.nodeName === "LI" && targetEl !== dragEl) { // 检查目标元素是否li元素且不是拖拽元素
      if (targetEl && targetEl["animated"]) return
      // 根据被拖拽元素和目标元素的顺序，决定插入位置
      if (_index(dragEl) < _index(targetEl)) {
        targetEl.parentNode.insertBefore(dragEl, targetEl.nextSibling)
      } else {
        targetEl.parentNode.insertBefore(dragEl, targetEl)
      }
      // 动画处理 - 拖拽元素和目标元素
      _anim(targetTop, targetEl)
      _anim(dragTop, dragEl)
    }
  }
  // 结束拖拽: 主要是为了拿到新的list 否则可以不写
  const dragEnd = () => {}
  el.addEventListener('dragstart', dragStart)
  el.addEventListener('dragover', dragOver)
}
// 控制按钮鉴权
const rolesInfo = reactive({
  roles: "admin",
  name:"管理员",
  authorities: [
    // "pos:category:list",
    // "system:user:list",
    "pos:product:edit",
    // "system:menu:list",
    // "system:role:list",
    "pos:product:delete",
    // "pos:sale:list",
    "pos:product:create" // 模块:页面:操作
  ]
})
const vHasShow: Directive<HTMLElement, string> = (el, bindings) => {
  const {value} = bindings
  if (value && value instanceof Array && value.length > 0) {
    const hasAuthorities = rolesInfo.authorities.some(permission => {
      return value.includes(permission)
    })
    if (!hasAuthorities) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
}
</script>

<template>
  <div class="directives-container">
    <a-input v-focus value="v-focus" placeholder="Basic usage" status="error"/>
    <hr>
    <div class="info">
      <img src="@/assets/avatar.jpg" alt="头像" width="50" height="50"/>
      <span>{{rolesInfo.name}}</span>
    </div>
    <a-button v-has-show="['pos:product:edit']">创建</a-button>
    <a-button v-has-show="['pos:sale:list']">编辑</a-button>
    <a-button v-has-show="['pos:product:delete']">删除</a-button>
    <hr>
    <ul class="directives-list" ref="parentNode" v-drag>
      <li
          class="list-item" v-for="(item, index) in dragList"
          :menuUrl="item.menuUrl"
          :key="item.id" draggable="true">
        <slot :item="item" :index="index">
          <div>{{ item.sortNum }} - {{ item.menuName }}</div>
        </slot>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
$namespace: "directives";
@include block(container) {
  width: 360px;
  .info {
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
}
@include block(list) {
  width: 350px;
  padding-inline-start: 0;

  .list-item {
    transition: 0.3s all ease-in;
    padding: 12px;
    border-bottom: 1px solid #dbdbdb;
    list-style: none;
    cursor: pointer;
    margin: 0;

    &:hover {
      background-color: #dbdbdb;
    }
  }
}
</style>
