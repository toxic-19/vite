<script setup lang="ts">

</script>

<template>
  <div class="skeleton-container">
    <header class="skeleton-header">
      <div class="img"></div>
      <div class="skeleton-info">
        <div class="text"></div>
        <div class="text"></div>
      </div>
    </header>
    <section class="skeleton-section">
      <div class="text"></div>
      <div class="text"></div>
    </section>
  </div>
</template>

<style scoped lang="scss">
$borderColor: #ccc;
$backgroundColor: #d2d2d2;
$namespace: "skeleton";
@include block(container) {
  width: 60%;
  border: 1px solid $borderColor;
  .text {
    width: 100%;
    height: 20px;
    background: $backgroundColor;
  }
}
@include block(header) {
  padding: 10px;
  border-bottom: 1px solid $borderColor;
  display: flex;
  .img {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    background: $backgroundColor;
  }
}
@include block(info) {
  margin-left: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
@include block(section) {
  padding: 10px;
  .text {
    margin: 10px 0;
  }
}
</style>
