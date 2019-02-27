// const { apiHandleError, InternalError } = require();
const grEndpoints = _require('services/gr/endpoints/gr');


async function fetchIframeSrcReviews(ctx, next) {
  const { reqId, state } = ctx;
  const { iframeSrc } = state;

  logger.info({ reqId, iframeSrc });

  let reviewsHTML;
  try {
    reviewsHTML = await grEndpoints('GET_IFRAME_SRC_REVIEWS', { reqId, iframeSrc });
  } catch (err) {
    console.log('something went wrong: fetchIframeSrcReviews');
    return `iframeSrcReviews ${err}`;
    // return apiHandleError(ctx, InternalError);
  }

  ctx.state = { ...state, reviewsHTML };
  logger.info('exit', { reqId, reviewsHTML: !!reviewsHTML });

  return next();
}


module.exports = fetchIframeSrcReviews;
