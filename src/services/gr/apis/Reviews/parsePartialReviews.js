const extractReviewHREFs = _require('utils/extractReviewHREFs');


async function parseIframe(ctx, next) {
  const { reqId, state } = ctx;
  const { reviewsHTML } = state;
  let reviewLinks = [];

  logger.info('entry', { reqId });

  reviewLinks = await extractReviewHREFs(reviewsHTML);

  ctx.state = { ...state, reviewLinks };
  logger.info('reviewLinks', { reqId, reviewLinks });

  return next();
}

module.exports = parseIframe;
