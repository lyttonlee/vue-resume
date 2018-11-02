<template>
  <div class="page-item section">
    <h2>Contact</h2>
    <div class="contact">
      <div class="experience">
        <h3>Experience</h3>
        {{contact.experience}}
      </div>
      <div class="evaluation">
        <h3>Evaluation</h3>
        {{contact.evaluation}}
      </div>
      <div class="hobby">
        <h3>Hobby</h3>
      </div>
    </div>
  </div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
  // ..
  computed: {
    ...mapState(['contact'])
  }
}
</script>
<style lang="less" scoped>
.section {
  background-color: rgba(13, 16, 110, 0.575) !important;
  .contact {
    width: 85%;
  }
}
</style>
