<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="/about">导航</router-link> |
      <router-link to="/info">Info</router-link> |
      <router-link to="/import">Import</router-link> |
      <router-link to="/tree">Tree</router-link> |
      <router-link to="/fun">Fun</router-link> |
      <router-link to="/menu1">Menu1</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

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
