<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cadastrar">Cadastrar Registro</router-link> |
      <router-link to="/listar">Listar Registro</router-link> |
      <router-link to="/buscar">Buscar Registro</router-link> |
      <router-link to="/deletar">Deletar Registro</router-link> |
      <router-link to="/atualizar">Atualizar Registro</router-link> 
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #07090c;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #e9dc22;
}
</style>