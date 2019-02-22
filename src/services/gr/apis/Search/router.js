const KoaRouter = require('koa-router');

const handleRequest = require('./handleRequest');
const fetchBooks = require('./fetchBooks');
const fetchBookReviews = require('./fetchBookReviews');
const fetchSrcReviews = require('./fetchSrcReviews');
const fetchFullReviews = require('./fetchFullReviews');
const parseBookIds = require('./parseBookIds');
const parseIframe = require('./parseIframe');
const parseSrcReviews = require('./parseSrcReviews');
const parseFullReviews = require('./parseFullReviews');
const returnBooks = require('./returnBooks');
const { handleResponse } = _require('apiResponse');

const Router = new KoaRouter();

Router
  .get('/',
    handleRequest,
    fetchBooks,       //returns XML that has best_book > book_id
    parseBookIds,
    returnBooks,
    fetchBookReviews, //returns XML that has iFrame
    parseIframe,
    fetchSrcReviews,  //returns HTML with partial reviews
    parseSrcReviews,
    fetchFullReviews,	//returns HTML with full reviews
    parseFullReviews,
    handleResponse
  );


module.exports = Router;
