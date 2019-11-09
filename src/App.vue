<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  position: absolute;
  top: 5vh;
  right: 5vw;
  a {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.3);
    text-decoration: none !important;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
