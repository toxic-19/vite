<script setup lang="ts">
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons-vue';
import {onMounted, ref} from "vue"
// toc
const content = ref(`## 1.
### 1.1
## 2.
### 2.1
### 2.2
## 3.
### 3.1
### 3.2
### 3.3
## 4.
### 4.1
### 4.2
### 4.3
## 5.
### 5.1
### 5.2
### 5.3`)
const title = ref<any[]>([])
const previewRef = ref()
const getTitle = () => {
  const anchors = previewRef.value.$el.querySelectorAll('h2, h3, h4')
  const titles = Array.from(anchors).filter(title => !!title.innerText.trim())
  if (!titles.length) {
    return
  }
  const hTags = Array.from(new Set(titles.map(title => title.tagName))).sort()
  title.value = titles.map(el => (
      { title: el.innerText,
        lineIndex: el.getAttribute('data-v-md-line'),
        indent: hTags.indexOf(el.tagName)
      }))
}
const activeTitle = ref()
const clickAnchor = (anchor) => {
  activeTitle.value = anchor.title
  const { lineIndex } = anchor
  const heading = previewRef.value.$el.querySelector(`[data-v-md-line="${lineIndex}"]`)
  if (heading) {
    previewRef.value.scrollToTarget({
      target: heading,
      scrollContainer: document.getElementsByClassName('v-md-editor-preview')[0],
      top: 20
    })
  }
}

// tabs
const activeKey = ref('1');
onMounted(() => {
  getTitle()
})
</script>

<template>
  <div class="today-container">
    <section class="today-doc">
      <a-tabs v-model:activeKey="activeKey" centered size="small" :tabBarGutter="30">
        <a-tab-pane key="1" tab="文件">Content of Tab Pane 1</a-tab-pane>
        <a-tab-pane key="2" tab="大纲" force-render>
          <aside class="today-anchor">
            <div v-for="anchor in title"
                 :class="[ 'anchor', {'active': activeTitle === anchor.title }]"
                 :style="{ padding: `6px 0 6px ${anchor.indent * 20}px`}"
                 @click="clickAnchor(anchor)">
              <a style="cursor: pointer">{{ anchor.title }}</a>
            </div>
          </aside>
        </a-tab-pane>
      </a-tabs>
    </section>
    <v-md-preview :text="content" height="400px" ref="previewRef"></v-md-preview>
  </div>
  <!-- mode: [edit | editable | preview] -->
</template>

<style scoped lang="scss">
$namespace: "today";
@include block('container') {
  display: flex;
  background-color: #ffffff;
}

@include block('doc') {
  min-width: 200px;
  color: #ffffff;
  padding: 0 10px;
  height: 400px;
  overflow: auto;
  border-right: 1px solid rgba(5, 5, 5, 0.06);
  @include scroll(0);
  a {
    color: rgba(0, 0, 0, 0.88);
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
    transition: all 0.3s;
  }
}

@include block('anchor') {
  padding-left: 10px;
  position: relative;
  cursor: pointer;
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border-inline-start: 2px solid rgba(5, 5, 5, 0.06);
    content: " ";
  }
  .anchor {
    &:hover {
      position: relative;
      &::before {
        position: absolute;
        left: -10px;
        top: 0;
        height: 30px;
        border-inline-start: 2px solid rgba(0, 138, 132, 0.5);
        content: " ";
      }
      a {
        color: rgb(0, 138, 132);
        font-size: 15px;
      }
    }
    &.active {
      position: relative;
      transition: all .2s;
      &::before {
        position: absolute;
        left: -10px;
        top: 0;
        height: 30px;
        border-inline-start: 2px solid rgb(0, 138, 132);
        content: " ";
      }
    }
  }
}

.v-md-editor-preview {
  height: 400px;
  flex: 1;
  overflow: auto;
  @include scroll(6);
}

:global(.ant-tabs > .ant-tabs-nav) {
  margin-bottom: 0 !important;
  height: 30px;
}
</style>
