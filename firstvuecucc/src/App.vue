<template>
  <div class="d-flex align-items-center flex-column">
    <div>
      <input v-model.number="inp" type="number">
      <button @click="test()" :disabled="nemLezarhato">Add</button>
    </div>
    <label v-if="szovegLatszik">Az ertek jelenleg: {{ertek}}</label>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: function() {
      return {
        ertek: 0,
        inp: 0,
        szovegLatszik: false
      }
  },
  methods: {
    test() {
      this.ertek += this.inp;
      this.szovegLatszik = true;
    }
  },
  computed: {
    nemLezarhato() {
      return this.inp == 0 || this.imp == ''
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
