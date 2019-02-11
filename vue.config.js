module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // ~ means node_modules
        data: `@import "~bulma/bulma.sass";`
      }
    }
  }
};
