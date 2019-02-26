// const { apiHandleError, InternalError } = require();
const grEndpoints = _require('services/gr/endpoints/gr');


async function fetchBookReviews(ctx, next) {
  const { reqId, state } = ctx;
  const { bookId } = state;

  logger.info({ reqId, ...state });

  let reviewXML;
  try {
    reviewXML = await grEndpoints('GET_BOOK_REVIEWS', { reqId, bookId });
  } catch (error) {
    console.log('something went wrong: fetchBookReviews');
    return 'oops';
    // return apiHandleError(ctx, InternalError);
  }

  ctx.state = { ...state, reviewXML };
  logger.info('exit', { reqId });

  return next();
}


module.exports = fetchBookReviews;
