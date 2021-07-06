<template>
  <div>
    <div id="nav">
      <router-link to="/egyik">Egyik</router-link> |
      <router-link to="/masik">Masik</router-link>
    </div>
    <router-view/>
    <h1>{{$store.state.nev}}</h1>
    <button @click="Change()">Change</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    Change(){
      this.$store.commit("changeName")
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
