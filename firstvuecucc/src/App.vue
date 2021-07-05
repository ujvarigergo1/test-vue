<template>
  <div class="d-flex align-items-center flex-column">
    <div>
      <input v-model.number="inp" type="number">
      <button @click="test()" :disabled="nemLezarhato">Add</button>
    </div>
    <label v-if="szovegLatszik">Az ertek jelenleg: {{ertek}}</label>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>id</th>
          <th>oldVal</th>
          <th>newVal</th>
          <th>diff</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(adat, index) in this.tabla" :key="index" :row="adat">
          <th scope="row">{{ adat.id }}</th>  
          <td>{{ adat.oldVal }}</td> 
          <td>{{ adat.newVal }}</td>
          <td>{{ adat.diff }}</td> 
          <td>
            <input type="button" value="Delete" @click="deleteRow(index)"/>
          </td>
        </tr>
      </tbody>
      <tfoot>
        Összesen: {{this.tabla.length}}
      </tfoot>
   </table>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: function() {
      return {
        ertek: 0,
        inp: 0,
        szovegLatszik: false,
        tabla: []
      }
  },
  methods: {
    test() {
      const date = new Date;
      this.tabla.push({
        oldVal: this.ertek,
        newVal: this.ertek + this.inp,
        diff: this.inp,
        id: `${date.getDay()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`})

      this.ertek += this.inp;
      this.szovegLatszik = true;
    },
    deleteRow(i) {
      this.tabla.splice(i,1)
    }
  },
  computed: {
    nemLezarhato() {
      return this.inp == 0 || this.inp == ''
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
