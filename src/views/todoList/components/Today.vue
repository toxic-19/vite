<script setup lang="ts">
import {getCurrentInstance, onMounted, ref} from "vue"
const content = ref(`
# heading 1
contentcontentcontentcontentcontentcontentcontentcontentcontent
contentcontentcontentcontentcontentcontent

## heading 2
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent

### heading 3
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent

## heading 2
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent

### heading 3
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent
contentcontentcontent`)
const title = ref<any[]>([])
const previewRef = ref()
const getTitle = () => {
  const anchors = previewRef.value.$el.querySelectorAll('h2, h3, h4')
  const titles = Array.from(anchors).filter(title => !!title.innerText.trim())
  if (!titles.length) {
    return
  }
  const hTags = Array.from(new Set(titles.map(title => title.tagName))).sort()
  title.value = titles.map(el => ({ title: el.innerText, lineIndex: el.getAttribute('data-v-md-line'), indent: hTags.indexOf(el.tagName)}))
}
const clickAnchor = (anchor) => {
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
onMounted(() => {
  getTitle()
})
</script>

<template>
  <div class="today-container">
<!--    <v-md-editor v-model="content" height="400px" mode="preview" ref="previewRef"></v-md-editor>-->
    <v-md-preview :text="content" height="400px" ref="previewRef"></v-md-preview>
    <section class="today-doc">
      <div v-for="anchor in title" :style="{ padding: `10px 0 10px ${anchor.indent * 20}px`}" @click="clickAnchor(anchor)">
        <a style="cursor: pointer">{{ anchor.title }}</a>
      </div>
    </section>
  </div>
  <!-- mode: [edit | editable | preview] -->
</template>

<style scoped lang="scss">
$namespace: "today";
@include block('container') {
  display: flex;
}
@include block('doc') {
  min-width: 200px;
  //background-color: #ffffff;
  color: #ffffff;
  padding-left: 10px;
}

.v-md-editor-preview {
  height: 400px;
  width: 80%;
  overflow: auto;
  background: #ffffff;
}
</style>
