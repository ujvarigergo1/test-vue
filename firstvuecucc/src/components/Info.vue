<template>
    <div>
        <button class="button" @click="firstButton">Alert</button>
        <button class="button" @click="secondButton">Reset</button>
    </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    num: Number
  },
  methods: {
      firstButton(){
          alert(this.num)
      },
      secondButton(){
          this.$emit('resetCounter')
      }
  }
}
</script>
<style scoped>
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border: 2px solid #4CAF50;
  border-radius: 6px;
}
.button:hover {
  background-color: #ffffff; /* Green */
  color: #4CAF50;
}
</style>