module.exports = {
  test: {
    '^/api/**': {
      target: 'http://127.0.0.1:5000/',
      hostRewrite: 'http://127.0.0.1:5000/',
      changeOrigin: true,
      secure: false,
    },
  },
//   // prod: {
//   //   '/api/v1/exceptionData/**': {
//   //     target: 'http://10.129.204.157',
//   //     secure: false,
//   //   },
//   // }
};
