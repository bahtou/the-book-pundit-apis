const KoaRouter = require('koa-router');

const GoodreadsAPI = new KoaRouter();

const { handleInitialRequest, responseHandler } = require('./controller');

const Search = _require('services/gr/apis/Search/router');
const Reviews = _require('services/gr/apis/Reviews/router');


GoodreadsAPI
  .use('/gr',

    Search.routes(),
    Search.allowedMethods(),

    Reviews.routes(),
    Reviews.allowedMethods()
  );

const routes = app => {
  app
    .use(responseHandler)
    .use(handleInitialRequest)

    .use(GoodreadsAPI.routes());
};


module.exports = routes;
