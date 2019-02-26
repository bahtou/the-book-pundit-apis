const KoaRouter = require('koa-router');

const { validateSearchTerm } = require('./validator');
const fetchBooks = require('./fetchBooks');
const parseBookIds = require('./parseBookIds');
const returnBooks = require('./returnBooks');

const Router = new KoaRouter();

Router
  .get('/books/search',
    validateSearchTerm,
    fetchBooks,       //returns XML that has best_book > book_id
    parseBookIds,
    returnBooks
  );


module.exports = Router;
