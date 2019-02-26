const KoaRouter = require('koa-router');

const { validateBookId } = require('./validator');
const fetchBookReviews = require('./fetchBookReviews');
const fetchIframeSrcReviews = require('./fetchIframeSrcReviews');
const fetchFullReviews = require('./fetchFullReviews');
const parseIframe = require('./parseIframe');
const parsePartialReviews = require('./parsePartialReviews');
const parseFullReviews = require('./parseFullReviews');


const Router = new KoaRouter();

Router
  .param('bookId', validateBookId)
  .get('/books/:bookId/reviews',
    fetchBookReviews, //returns XML that has iFrame
    parseIframe,
    fetchIframeSrcReviews,  //returns HTML with partial reviews
    parsePartialReviews,
    fetchFullReviews,	//returns HTML with full reviews
    parseFullReviews
  );


module.exports = Router;
