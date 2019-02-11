module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // ~ means node_modules
        data: `@import "~bulma/bulma.sass";`
      },
      css: {
        data: `@import "@/node_modules/@fortawesome/fontawesome-free/css/all.css"`
      }
    }
  }
};
