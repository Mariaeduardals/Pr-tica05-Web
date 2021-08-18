<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width: 450px; height: 450px;">
    <HelloWorld msg="Prática V da disciplina de Web"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
*{
  background-color:rgb(219, 219, 219);
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #272727;
  margin-top: 60px;
}
</style>
