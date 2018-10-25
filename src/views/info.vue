<template>
  <div class="page-item section">
    <h2>基本信息</h2>
    <mu-avatar size=80>
      <img src="../assets/logo.png">
    </mu-avatar>
    <h3>博学之,审问之,慎思之,明辨之,笃行之</h3>
    <div>
      <mu-paper class="paper" circle :z-depth="4">
        <i class="iconfont icon-dian"></i>
      </mu-paper>
      <mu-paper class="paper" circle :z-depth="4">
        <i class="iconfont icon-dian"></i>
      </mu-paper>
    </div>
  </div>
</template>
<style lang="less" scoped>
.section {
  background-color: rgb(20, 73, 73) !important;
  .paper {
    width: 50px;
    height: 50px;
    background-color: rgba(16, 68, 180, 0.363);
  }
}
</style>
