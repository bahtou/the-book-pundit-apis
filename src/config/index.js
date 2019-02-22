const config = {

  env: process.env.NODE_ENV,
  host: process.env.NODE_HOST,
  port: process.env.NODE_PORT,

  root: process.env.PWD,
  serviceAPI: process.env.SERVICE_API,

  gr: {
    key: process.env.GOODREADS_KEY
  },

  gitsha: process.env.GIT_VERSION
};


module.exports = config;
