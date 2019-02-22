const KoaRouter = require('koa-router');

const BooksSearchAPI = new KoaRouter();
const BooksReviewsAPI = new KoaRouter();

const { validateSearchTerm, validateBookId } = require('../validator');
const { hydrateBook, hydrateReviews } = require('../hydrator');
const { handleInitialRequest, responseHandler } = require('./controller');

const Search = require('../apis/Search/router');
const Reviews = require('../apis/Reviews/router');


BooksSearchAPI
  .use('/books/search',
    validateSearchTerm,
    hydrateBook,

    Search.routes(),
    Search.allowedMethods()
  );

BooksReviewsAPI
  .use('/books/:bookId/reviews',
    validateBookId,
    hydrateReviews,

    Reviews.routes(),
    Reviews.allowedMethods()
  );


const routes = app => {
  app
    .use(responseHandler)
    .use(handleInitialRequest)

    .use(BooksSearchAPI.routes())
    .use(BooksReviewsAPI.routes());
};


module.exports = routes;
