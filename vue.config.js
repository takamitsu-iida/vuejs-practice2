module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Bulmaを直接指定するならこう。
        // data: `@import "~bulma/bulma.sass";`

        // @/ is an alias to src/
        // ~ is an alias to node_modules/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/variables.scss";`
      }
    }
  }
};
