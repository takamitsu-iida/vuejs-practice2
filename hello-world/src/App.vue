<template>
  <!-- eslint-disable prettier/prettier -->
  <div id="app">

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger burger" v-bind:class="{ 'is-active': menuActive }" v-on:click="menuToggle()" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': menuActive }">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/">Home</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/table">Table</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/about">About</router-link>
          </a>
        </div>

      </div>
    </nav>

    <router-view />

  </div>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    menuToggle() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>

<style scope lang="scss">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

#navbarBasicExample {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#nav {
  padding: 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
