<script setup lang="ts">
import type {Directive} from "vue"
import {reactive} from "vue"; // 用于类型检查 只导入了 Directive 的类型。而不是 Directive 类

const vFocus: Directive = { // 在setup中 任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令
  mounted: (el: HTMLElement) => el.focus() // mounted: 元素插入到父元素时调用
}

const vDrag: Directive = {

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
    <a-input value="v-focus" placeholder="Basic usage" status="error"/>
    <hr>
    <div class="info">
      <img src="@/assets/avatar.jpg" alt="头像" width="50" height="50"/>
      <span>{{rolesInfo.name}}</span>
    </div>
    <a-button v-has-show="['pos:product:edit']">创建</a-button>
    <a-button v-has-show="['pos:sale:list']">编辑</a-button>
    <a-button v-has-show="['pos:product:delete']">删除</a-button>
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
</style>
