const config = {

  env: process.env.NODE_ENV,
  host: process.env.NODE_HOST,
  port: process.env.NODE_PORT,

  serviceAPI: process.env.SERVICE_API,

  gr: {
    url: 'https://www.goodreads.com',
    key: process.env.GOODREADS_KEY
  },

  gitsha: process.env.GIT_VERSION
};


module.exports = config;
