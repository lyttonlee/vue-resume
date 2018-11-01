<template>
  <div id="app">
    <Resume />
  </div>
</template>
<script>
import Resume from './views/resume'
export default {
  components: {
    Resume
  }
}
</script>

<style lang="less">
#app {
  font-family: Helvetica,sans-serif, 'Avenir', Helvetica, Arial",Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d0d2d4;
}
</style>
