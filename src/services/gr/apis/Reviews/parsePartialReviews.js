const extractReviewHREFs = _require('utils/extractReviewHREFs');


async function parsePartialReview(ctx, next) {
  const { reqId, state } = ctx;
  const { bookId, reviewsHTML } = state;
  let reviewLinks = [];

  logger.info({ reqId });

  reviewLinks = await extractReviewHREFs(reviewsHTML);

  if (reviewLinks.length === 0) {
    logger.info('--no reviews', { reqId, bookId });
    return ctx.body = [];
  }

  ctx.state = { ...state, reviewLinks };
  logger.info('reviewLinks', { reqId, reviewLinks });

  return next();
}

module.exports = parsePartialReview;
