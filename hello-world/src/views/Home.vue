<template>
  <div class="home">
    <!-- ヒーロー -->
    <section class="hero is-info welcome is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Vue.js with Bulma CSS Framework</h1>
          <h2 class="subtitle">実験中</h2>
        </div>
      </div>
    </section>

    <!-- コンテンツ -->
    <div class="columns">
      <div class="column is-12">
        <div class="home-contents">
          <img alt="Vue logo" src="../assets/logo.png" />
          <HelloWorld msg="This is my first App" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  }
};
</script>

<style scope lang="scss">
.home-contents {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.hero.welcome.is-info {
  background: #36d1dc;
  background: -webkit-linear-gradient(to right, #5b86e5, #36d1dc);
  background: linear-gradient(to right, #5b86e5, #36d1dc);
}
.hero.welcome .title,
.hero.welcome .subtitle {
  color: hsl(192, 17%, 99%);
}

.columns {
  width: 100%;
  height: 100%;
  margin-left: 0;
}
</style>
