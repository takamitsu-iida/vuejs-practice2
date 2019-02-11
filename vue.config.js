module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // ~ is an alias to node_modules/
        data: `@import "~bulma/bulma.sass";`
      }
    }
  }
};
