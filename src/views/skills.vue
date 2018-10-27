<template>
  <div class="page-item section">
    <h2>技术栈</h2>
    <mu-container>
      <template v-for="(item, index) in this.skills">
        <mu-chip :key="index" color="#009688">
          {{item.attr}}
        </mu-chip>
      </template>
    </mu-container>
  </div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
  data () {
    return {
      initVal: 0
    }
  },
  computed: {
    ...mapState(['skills'])
  }
}
</script>

<style lang="less" scoped>
.section {
  background-color: rgb(56, 19, 59) !important;
  .st {
    word-break: break-all;
    padding: 0 30px;
  }
}
</style>
