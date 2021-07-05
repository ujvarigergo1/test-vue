<template>
  <div orientation='vertical'>
    <input v-model.number="inp" type="number">
    <button @click="test()">Teszt</button>
    <label v-if="ertek != 0">Az ertek megvaltozott a kovetkezore: {{ertek}}</label>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
        ertek: 0,
        inp: 0
      }
    },
     methods: {
    test() {
      this.ertek += this.inp
      
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
