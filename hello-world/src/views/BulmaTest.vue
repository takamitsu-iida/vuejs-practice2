<template>
  <div class="container">
    <div class="columns">
      <div class="column is-12">

        <!-- ヘッダ部 -->
        <section class="hero is-info welcome is-small">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Hello, Admin.</h1>
              <h2 class="subtitle">I hope you are having a great day!</h2>
            </div>
          </div>
        </section>

        <!-- コンテンツ -->
        <div class="columns">

          <!-- 左側 -->
          <div class="column is-4">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">Inventory Search</p>
              </header>
              <div class="card-content">
                <div class="content">
                  <div class="control has-icons-left has-icons-right">
                    <input class="input is-large" type="text" placeholder>
                    <span class="icon is-medium is-left">
                      <i class="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右側 -->
          <div class="column is-8">
            <table-sample></table-sample>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

// 使いたいコンポーネントをインポートする
// @ is an alias to /src
import TableSample from "@/components/TableSample.vue";

export default {
  name: "BulmaTest",
  components: {
    TableSample
  }
};

</script>

<style scoped>
.columns {
  width: 100%;
  height: 100%;
  margin-left: 0;
}
.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.card-header-title {
  color: #8F99A3;
  font-weight: 400;
}
.info-tiles {
  margin: 1rem 0;
}
.info-tiles .subtitle {
  font-weight: 300;
  color: #8F99A3;
}
.hero.welcome.is-info {
  background: #36D1DC;
  background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
  background: linear-gradient(to right, #5B86E5, #36D1DC);
}
.hero.welcome .title, .hero.welcome .subtitle {
  color: hsl(192, 17%, 99%);
}
.card .content {
  font-size: 14px;
}
.card-footer-item {
  font-size: 14px;
  font-weight: 700;
  color: #8F99A3;
}
.card-table .table {
  margin-bottom: 0;
}
.events-card .card-table {
  max-height: 250px;
  overflow-y: scroll;
}
</style>

