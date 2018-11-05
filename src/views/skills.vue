<template>
  <div class="page-item section">
    <h2>Skills</h2>
    <mu-container class="container">
      <transition-group name="flip-list" tag="div">
        <mu-chip v-for="(item, index) in skills" class="chip" :key="index" color="#b0bec5" text-color="rgb(56, 19, 59)">
          {{item}}
        </mu-chip>
      </transition-group>
    </mu-container>
  </div>
</template>
<script>
// import shuffle from 'shuffle-array'
import {
  mapState,
  mapActions
} from 'vuex'
export default {
  data () {
    return {
      // skills: ['vue', 'react', 'js', 'html', 'css', 'node']
    }
  },
  computed: {
    ...mapState(['skills'])
  },
  methods: {
    ...mapActions(['shuffleSkills'])
  },
  mounted () {
    this.time = setInterval(() => {
      this.shuffleSkills()
    }, 5000)
  },
  beforeDestroy () {
    console.log('clear')
    clearInterval(this.time)
  }
}
</script>

<style lang="less" scoped>
.flip-list-move {
  transition: transform 2s;
}
.section {
  background-color: rgb(56, 19, 59) !important;
  .container {
    width: 80%;
    .chip {
      margin: 10px;
    }
  }
}
</style>
