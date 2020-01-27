module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/io-group/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/styles/variables.scss";',
      },
    },
  },
};
