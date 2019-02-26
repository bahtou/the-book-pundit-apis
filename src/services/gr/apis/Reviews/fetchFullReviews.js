// const { apiHandleError, InternalError } = require();
const { getFullReviewResponse } = _require('services/gr/endpoints/gr/mocks');
const grEndpoints = _require('services/gr/endpoints/gr');


async function fetchFullReviews(ctx, next) {
  const { reqId, state } = ctx;
  const { reviewLinks } = state;
  let reviews = [];
  let reviewPromises = [];

  logger.info({ reqId, reviewLinks });

  try {
    reviews = await getFullReviewResponse();
    // reviewPromises = reviewLinks.map(reviewURL => grEndpoints('GET_FULL_REVIEW', { reqId, reviewURL }));
    // reviews = await Promise.all(reviewPromises);
  } catch (error) {
    console.log('something went wrong: fetchBookReviews');
    return 'oops';
    // return apiHandleError(ctx, InternalError);
  }

  ctx.state = { ...state, reviews };
  logger.info('exit', { reqId });

  return next();
}


module.exports = fetchFullReviews;
