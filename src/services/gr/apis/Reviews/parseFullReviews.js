const extractReviews = _require('utils/extractReviews');


async function parseFullReviews(ctx, next) {
  const { reqId, state } = ctx;
  const { reviews } = state;
  let reviewPromises = [];
  let parsedReviews = [];

  logger.info({ reqId });

  reviewPromises = reviews.map(review => extractReviews(review));
  parsedReviews = await Promise.all(reviewPromises);

  ctx.state = { ...state, parsedReviews };
  logger.info({ reqId, parsedReviewsLen: parsedReviews.length });

  return ctx.body = parsedReviews;
}

module.exports = parseFullReviews;
