const KoaRouter = require('koa-router');

const validateBookId = require('./validator');
const handleRequest = require('./handleRequest');
const fetchBookReviews = require('./fetchBookReviews');
const fetchSrcReviews = require('./fetchSrcReviews');
const fetchFullReviews = require('./fetchFullReviews');
const parseIframe = require('./parseIframe');
const parseSrcReviews = require('./parseSrcReviews');
const parseFullReviews = require('./parseFullReviews');
const { handleResponse } = _require('apiResponse');


const Router = new KoaRouter();

Router
  .param('bookId', validateBookId)
  .get('/',
    handleRequest,
    fetchBookReviews, //returns XML that has iFrame
    parseIframe,
    fetchSrcReviews,  //returns HTML with partial reviews
    parseSrcReviews,
    fetchFullReviews,	//returns HTML with full reviews
    parseFullReviews,
    handleResponse
  );


module.exports = Router;
